
Blueprint communication lets Unreal Engine objects interact through direct references, interfaces, or event dispatchers.
---

## **I. Intro**

### **What is Blueprint Communication?**

- **A means for seperate individual objects to interact with each other**
    - Imagine a Light Blueprint and a LightSwitch Blueprint
- Useful to do things like
    - Telling a specific object to do something
    - Querying another object for
        - Status
        - State
        - Property Values
        - Variable Values
        - etc.

---

### **Primer**

- UE4 has no way to send a broad signal to everyone
    - We need a sender and a receiver
- Communication will **always** require a reference at some point
- All bluprint communication is **one-way**
    - Blueprints can send data back and forth but it requires both bp to set up their own individual paths of communication
    - Queries are possible, but are initiated by the sender

---

### **Communication Types**

### **3 primary communication methods:**

- **Direct Communication**
- **Blueprint Interface message calls**
- **Event Dispatchers**
- Others are probably extensions of these three

*EX: Actor Communication Types —— [https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/ActorCommunication/](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/ActorCommunication/)*

---

### **How to use different types?**

- First question is the **flow of communication**
    - Is the sender **pushing the data out** to the receiver(s)? If yes,
        - Direct Communication
        - Blueprint Interface Communication
    - Are the receivers actively **listening** for the sender to do something? If yes,
        - Event Dispatchers
- Second question is **which party can get a reference** to the other
    - Can the **sender get a reference** to the receiver(s)? If yes,
        - Direct Communication
        - Bluprint Interface Communication
    - Can only the receiver(s) get a reference to the sender? If yes,
        - Event Dispatchers

---

## **II. Direct Blueprint Communication**

### **Concept**

- One blueprint is talking to another
    - Sender gains access to receiver
    - Sender can then
        - Query data and variables
        - Send data and update variables
        - Call functionality on the receiver
- **Always one-to-one communiction**
    - If you are using Foreach Loop, it will still be one-to-one in each iteration!

---

### **When to use**

- You already know the following
    - The sender
    - The receiver(s) - at least have a clear way to get a reference to them
    - What functionality or data you are going to tap into
    - Basically, you know everything that could ever happen between these two things, you just need to make something happen
- If you don’t know everything
    - You will likely wind up making a lot of Branch nodes
        - If it’s a box, open it; else if it’s a light, turn on it…
    - Direct Communication may not good for this circumstance

---

### **How to do**

- Sender gets a reference to the receiver
    - Assigned at the start of the game(BeginPlay)
    - Overlaps
    - Get All Objects/Actors of Class
        
        (Very Slow, use with caution)
        
- Sender may need to cast this reference to the thing it wants to talk to
    - **Casting is just a test to verify what it is you are talking to**
- If the Cast is successful, then the connection is complete
    - Sender can send data to or pull data from the revceiver
    - Sender can call functions directly on the receiver

### **What casting looks like from the sender**

![https://i.imgur.com/iO0CLE9.png](https://i.imgur.com/iO0CLE9.png)

---

### **A Word on Casting**

- **Think of Casting as just a way to verify what you’re talking to**
    - Imagine talk to someone on telephone, ‘Hey, is this XXX?’
    - Once you’ve cast to a given type, only **then** can you access its functionality
- If a cast fails, you can always cast to something else
    - Making a lot of branches to determine the actor type
- If you already hace a reference of the proper type, you don’t need to cast!

---

### **Casting and Object Orientation**

![https://i.imgur.com/4pUMz35.png](https://i.imgur.com/4pUMz35.png)

---

## **III. Bluprint Interfaces**

### **Concept**

- A way to specify functionality without any kind of implementation
- Iterfaces don’t really care whether or not the receiver knows about them
    - Imagine telling a robot to get some food, it wouldn’t respond
    - And that’s okay, you game won’t crash!
- **Still one-to-one communication**
- **The sender still needs some references to the receiver**

---

### **How BP Interfaces Work**

- Interfaces are a unique form of communication
    - You make them in the Content Browser
- You send data, called **Interfaces Messages**, *through* that asset to listening objects
    - By default, nothing receives Interface Messages
    - You have to *implement* the Blueprint Interface onto the BP that will be receiving
    - Unless you do this, the Blueprint Interface does nothing
    - This means that anything doesn’tneed to respond to an Interface Message simply doesn’t have to implement the Interface
    - Only receivers need to implement the interface
    - Anything can send Interface Messages, whether it implements the Interface or not
- It’s perfectly safe to send Interface Messages to objects that don’t implement the appropriate Blueprint Interface
    - Nothing will happen because the object just *doesn’t care*

---

### **When to use**

- When you are sending a signal to some other object, and you don’t really care what it does once it receives the signal
- Example:
    - Interaction: I hit the B button and send out an *InteractWithThings* signal
        - Doors know that they should open
        - Lights know that they should toggle
        - Potted plants don’t do anything. They don’t care that you interact with them. (No need to implement the BP Interface)
- *EX: Interfaces can be used for communication between sub-levels*

---

### **How to do**

- Create them in the Content Browser
    - Right Click > Blueprint Submenu > Blueprint Interface
- In the Blueprint Interface Editor, you automatically get your first function
    - You can setup inputs/outputs
    - You can’t set up any functionality
- Implement the Interface
    - In the receiving class, go under Class Settings
    - Under Implemented Interfaces, add your new Interface
    - Recompile
    - You can now create an event in your graph named the same thing as your function
    - Now when this class receives the message for that Interface function, something happens
- **NOTE: Only receivers actually need to implement a Interface**
    - **Anyone can call them**

---

### **Events and Functions**

- If the Interface Function has no return value (output), it gets implemented as an Event on the receiver
    
    ![https://i.imgur.com/vvAZQoV.png](https://i.imgur.com/vvAZQoV.png)
    
    ![https://i.imgur.com/W9zxUba.png](https://i.imgur.com/W9zxUba.png)
    
- If the Interface Function has a return value (output), it gets implemented as a Function on the receiver
    - Useful when the sender needs to perform functionality on the receiver and then get something back from it
        
        ![https://i.imgur.com/i2TAy08.png](https://i.imgur.com/i2TAy08.png)
        
        ![https://i.imgur.com/FZyja1k.png](https://i.imgur.com/FZyja1k.png)
        
- Trick: **Self-calling Interface Functionality**
    - Once an Interface Function has been implemented on the receiver, the receiver can then call that functionality on itself!
    - This is useful to guarantee that a given object has a certain set of functionality

---

### **EX: Organization of Nodes**

- Collapse Nodes
    - If we copy/paste the node, each copy will be an individual collection of those nodes. If we want to fix it, we have to fix all.
- Collapse to Function
    - It will work when we want to fix some functionality. *But try to reserve a function for only the time where external objects need to call. If not, consider a Macro.*
- Collapse to Macro

---

## **IV. Event Dispatchers**

### **Concept**

- A way to establish a listening-type relationship so that the receiver is “listening” for an event on the sender to take place. It can then respond however it likes
- They’re a lot like Twitter
    - You set up an Event Dispatcher on the sender
    - Any number of receivers can bind to this Event Dispatcher
    - The sender calls the Event Dispatcher
    - The receivers who had an Event Bound to that Event Dispatcher can then react accordingly

---

### **When to use**

- When you have a single event on a Sender that needs to be received by a lot of different receivers, each doing their own thing
    - The sender cannot receive a return value from receivers
- You start off knowing who the sender is
    - But you don’t know or care who receivers are
- The receivers all get a reference to (know about) the sender
- The receivers also know **when to start listening** for specific events
    - Or **when to stop listening**
    - Depending on your setup, it may be dangerous to leave a Bind in place forever
        - In these cases, you will need to Unbind

---

### **How to do**

- In the Sender Class
    - Create a new Event Dispatcher in the My Blueprint panel
    - If you have to pass along any data (like Health) that becomes an input
    - At some point in your Event Graph, you sender must call this Event Dispatcher
        - Drag a reference to the Event Dispatcher into the Graph, choose Call
- In the Receiver Class
    - **You must have a reference to the sender!**
    - Once you’ve confirmed the sender class is what you want (You might need to cast here)
        - Bind the Event Dispatcher by name
        - Create a Custom Event from the Event Pin
        - That Custom Event will be fired whenever the sender calls their Event Dispatcher
    - Know that you may need to stop listening at some point
        - This means unbinding the event
        - This is very easy if you stored a reference to the Sender Class

---

### **Event Dispatchers on the sender and the receiver**

- From the Sender’s perspective, you only need to setup the Event Dispatcher then Call it at some point in the Event Graph
    - **Notice that the call doesn’t require a reference!** Instead, the sender calls the Dispatcher on itself!
        
        ![https://i.imgur.com/yIY126w.png](https://i.imgur.com/yIY126w.png)
        
- Any object wanting to become a receiver must:
    - Have or obtain a reference to the sender
    - Bind its own Custom Event to that Diapatcher
        - This Custom Event must have the same  as the Event Dispatcher
            
            **Signature**
            
            ![https://i.imgur.com/A7h4z08.png](https://i.imgur.com/A7h4z08.png)
            

---

### **Event Dispatcher Signatures**

- Signatures are a specific combination of inputs on a diapatcher
- These can be shared if you are going to creating a Dispatcher for an already existing event
- Signatures can be used to make Dispatchers intelligent
- Unreal does most of the heavy lifting for managing signatures
    
    ![https://i.imgur.com/7HGaltT.png](https://i.imgur.com/7HGaltT.png)
    

---

### **Event Dispatcher Options**

- When you drag an Event Dispatcher into an Event Graph or try to access one from a receiving object, you see a lot of options. What do they all mean?
    1. **Call**: This will broadcast the Event Dispatcher to any receivers
    2. **Bind**: This will create a Bind node, uesd to bind a specific Custom Event so it fires in response to the Dispatcher
    3. **Unbind**: Create a Unbind node, used to unbind a sepcific Custom Event Dispatcher so we no longer listen for it
    4. **Unbind All**: Create a Unbind All node, which will unbind all events from this dispatcher across all objects in the game. No more listeners!
    5. **Event**: Add a Custom Event with a Signature matching the Event Dispatcher
    6. **Assign**: A Bind node with an attached Custom Event that has a Signature matching the Event Dispatcher

---

## **V. Conclusion**

- Lots of ways to get BP to communicate
- In many cases, more than one approach will apply
    - Just because there are other ways to do it doesn’t means you are wrong, also doesn’t means you are right
- Teams need to work together to determine best approach
- **Unify and Standardize!**
    - Agree on what types of approaches are to be used under what circumstances