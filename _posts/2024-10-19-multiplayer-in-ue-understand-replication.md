---
title: Multiplayer in UE - Understand Replication
---
Multiplayer foundation of UE.

---

# I. Netmode

- **NM_Standalone**
    - Load a map locally
    - Both Server and Client
- **NM_DedicatedServer**
    - Player can connect as clients
    - No local player and no viewport
    - Server only console application
- **NM_ListenServer**
    - Load a map and add `?Listen`
    - Same as *Standalone* but other instances of the game can connect as clients
- **NM_Client**
    - Connect to a remote server
    - Update world at the behest of the server
    - As Client

![Untitled](/assets/images/posts/multiplayer/image_1.png)

Threre are three different scenarios that an Unreal game can run in.

![Untitled](/assets/images/posts/multiplayer/image_2.png)

---

# II. Replication System

## 1. **Basics**

Replication will make sure all of different game instances are in sync. 

Replication happens on the level of actors.

The replication system relies on three important classes:

- **UNetDriver**
    - Server: Listening for messages from clients
    - Clients: Establish a *NetConnection* to the server
- **UNetConnection**
    - Server: Have multiple *NetConnections* for each remote player
    - Clients: Single *NetConnection*
- **UChannel**
    - Different channels in *NetConnections* *(VoiceChannel, ActorChannel, etc.)*
    - When an actor **is eligible for replication and relevant to a particular player**, then the server will open an *ActorChannel* in that player’s *NetConnection.* **Which means, that actor will be replicated.**

![Untitled](/assets/images/posts/multiplayer/image_3.png)

## 2. Actor Replication

If an actor is being replicated to a client, there are three important things that can happen as a result.

- **Lifetime**
- **Property**
- **RPCs**

### Detailed Actor Replication Flow

[*https://docs.unrealengine.com/4.26/en-US/InteractiveExperiences/Networking/Actors/ReplicationFlow/*](https://docs.unrealengine.com/4.26/en-US/InteractiveExperiences/Networking/Actors/ReplicationFlow/)

## 3. Ownership & Relevancy

### Relevancy

When an actor is eligible for replication, every so often the server’s net driver will check that actor against each client connection to determine if it’s relevant to that client. Actors can be set to  `*bAlwaysRelevant*`. **Ownership plays an important role in relevancy: an actor owned by a particular player will always be considered relevant for the corresponding client.**

If the client doesn’t own the actor and the actor is not relevant to it,, the default behavior is:

- If the actor is hidden and its root component has collision disabled, it’s not relevant.
- Otherwise the relevancy is based on the distance from the player.

These rules can be override in *`IsNetRelevantFor`* function for any actor class.

### Ownership

Every actor can have another actor designated as its owner. It enables the server to figure out the actor belongs to which particular client connection.  Some actors *(e.g. PlayerControllers)* are configured to only be relevant to their owner.

Connection ownership is important for a few things:

- RPCs need to determine which client will execute a run-on-client RPC
- Actor replication and connection relevancy
- Actor property replication conditions when the owner is involved

![Untitled](/assets/images/posts/multiplayer/image_4.png)

## 4. Update Frequency & Priority

### Update Frequency

Setting NetUpdateFrequency will dedicate how many times per second the server will check and potentially send new data to clients if anything changed.

The property can be changed every single frame on the server, while the client will just get the most recent value whenever it happens to be updated.

### Priority

The server will emplay some simple load balancing in order to mitigate bandwidth 

Actors that are closed to the player are weighted with a higher priority, and acotrs that haven’t been updated in a while will also have a higher priotity.

***NetPriority*:** An factor that applies an additional scale to the priority weight.

## 5. RPCs (Remote Procedure Calls)

**RPCs are typically reserved for high priority, time-critical network code. ***(e.g. Positions Update)*

Any `*UFUNCTION`* can be designated *Client, Server* ot *NetMulticast* to make it an RPC.

- Invoke a **Client RPC** on the server: Run function implemention on the owning client
- Invoke a **Server RPC** on the client: Run function implemention on the server
- Invoke a **Multicast RPC** on the server: Run function implemention on everywhere (both srver and clients)
    - **Relevancy only affects multicast RPCs.** If the channel is not open, the client simply won’t receive that RPC.

### Reliable Property

RPCs can be declared Reliable or Unreliable. 

- **Unreliable RPCs can be dropped if the bandwidth is saturated. They are not guaranteed to arrived or arrived in order.**
- **Reliable RPCs are guaranteed to arrive. Within a single actor, reliable RPCs are guaranteed to arrive in the order in which they were called.**

### Implementation

In C++, the actual body of your function needs to be defined with the “_implementation” suffix

```cpp
<PlayerPawn.h>

UFUNCTION(Server, Reliable)
void Server_InitiateAttack(float ChargeStrength);
```

```cpp

<PlayerPawn.cpp>

// This function will be executed on client
void PlayerPawn::OnAttackReleased()
{
		// Do something...
		
		Server_InitiateAttack(ChargeStrength);
}

// This function will be executed on server
void PlayerPawn::Server_InitiateAttack_Implementation(float ChargeStrength)
{
		UE_LOG(LogRepsiCore, Log, TEXT("Attack! (Charge: %0.2f)"), ChargeStrength);
}
```

Server RPCs can also be declared `WithValidation` , in which case you need to implement a  “_Validate” function that takes all the same arguments and returns a boolean indicating whether those values are trustworthy. *(Cheat Detection)*

If a server RPC fails validation, then the corresponding client will be kicked out.

```cpp
void PlayerPawn::Server_InitiateAttack_Validate(float ChargeStrength)
{
		return ChargeStrength <= MaxChargeStrength;
}
```

---

# III. Implementation

To enable replication for a property, you can add the `Replicated` specifier in the detial panel.

In C++, you need to define a `GetLifetimeReplicatedProps` function in the actor’s .cpp file. This function is where you specify which properties should be replicated, and under what conditions.

```cpp
void SomeActor::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
		Super::GetLifetimeReplicatedProps(OutLifetimeProps);

		DOREPLIFETIME(SomeActor, SomeProperty);    // Replicated to all clients at all times

		// Or with conditions
		// DOREPLIFETIME_CONDITION(SomeActor, SomeProperty, COND_OwnerOnly);
		// DOREPLIFETIME_CONDITION(SomeActor, SomeProperty, COND_SkipOwner);
		// DOREPLIFETIME_CONDITION(SomeActor, SomeProperty, COND_InitialOnly);
		// ...
}
```

If you need to run some code when a replicated property is updated, then you can declare a `RepNotify` function and use the `ReplicatedUsing` specifier.

```cpp
<SomeActor.h>

UPROPERTY(ReplicatedUsing=OnRep_SomeProperty, ...);
```

```cpp
<SomeActor.cpp>

void SomeActor::OnRep_SomeProperty()
{
		UE_LOG(LogRepsiCore, Log, TEXT("New SomeProperty value is %d"), SomeProperty);
}
```

When using blueprint, the replication will automatically invoke the *RepNotify* function on the server. But when using C++, you will need to manually call it on the server.

---

# IV. Authority & Role

## 1. Authority

Whenever you’re running some code in an Actor class, you can check for authority. **If you have the authority, you have the final say in updating the state of the actor.**

- Have Authority
    - The GameInstance is *NM_Standalone*
    - It’s the server
    - It’s a client and the actor was spawned on the client
- No Authority
    - This GameInstance is a client and the actor is replicated from the server

## 2. Network Role

There are four possible roles for actors:

- *ROLE_NONE*
- *ROLE_SimulatedProxy*
- *ROLE_AutonomousProxy*
- *ROLE_Authority*

Role and RemoteRole could be reversed depending on who is inspecting these values.

For example, if on the server you have this configuration:

- Role == *Role_Authority*
- RemoteRole == *ROLE_SimulatedProxy*

Then the client would see it as this:

- Role == *ROLE_SimulatedProxy*
- RemoteRole == *ROLE_Authority*

## 3. Authority, Relevancy, Ownership

- Authority: Determine if the GameInstance have the final say in updating the state of the actor.
- Relevancy: When an actor is eligible for replication and relevant to a particular player, then the actor will be replicated on that client.
- Ownership: An important property involved in several cases
    - RPCs need it to determine which client will execute a run-on-client RPC
    - Actor replication and connection relevancy
    - Actor property replication conditions when the owner is involved

---

### Reference

- [*https://www.youtube.com/watch?v=JOJP0CvpB8w*](https://www.youtube.com/watch?v=JOJP0CvpB8w)
- [*https://docs.unrealengine.com/5.2/en-US/programming-network-multiplayer-games-for-unreal-engine/*](https://docs.unrealengine.com/5.2/en-US/programming-network-multiplayer-games-for-unreal-engine/)
- [*https://cedric-neukirchen.net/docs/category/multiplayer-network-compendium*](https://cedric-neukirchen.net/docs/category/multiplayer-network-compendium)