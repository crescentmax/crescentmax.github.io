
Unreal provides different pointer types to manage references, garbage collection, and asset loading safely.
---

# Pointers

## 1. Raw Pointers `UObject*`

- Just a plain C++ pointer.
- Unreal's **GC (Garbage Collector)** does *not* know about it unless it’s marked with `UPROPERTY()`.

## 2. `TObjectPtr<T>`

- Gives GC metadata about your reference, but behaves like a raw pointer in code.
- Safest general choice for “normal references” in UE5.
- Blueprint-visible variables use this under the hood.

## 3. `TWeakObjectPtr<T>`

- Non-owning reference to a UObject. **Does not keep the object alive.**
- GC can safely collect the object → the pointer auto-resets to `nullptr`.
- Before using, you must check `.IsValid()`.

## 4. `TSoftObjectPtr<T>`

- Stores a reference by **asset path**, not a direct pointer.
- Object doesn’t need to be loaded — you can load it on demand (sync or async)
- Common in asset references (UI images, config data, etc)
- `TLazyObjectPtr` will be deprecated in a future engine version and new features should use `TSoftObjectPtr` instead.

## 5. `TSoftClassPtr<T>`

- Like `TSoftObjectPtr`, but for classes.
- Useful when you want to reference a Blueprint class without loading it until needed.
- Example: Spawning enemies from a class that might not be loaded yet.

## 6. Reference Table

| C++ Type | GC Ownership | Keeps Object Loaded | Typical Use | **Blueprint equivalent** | Useful BP Nodes |
| --- | --- | --- | --- | --- | --- |
| `UObject*` (raw) **without** `UPROPERTY` | ❌ Not tracked | N/A | Local temps, parameters where lifetime is guaranteed | *(Not exposed; you won’t see this in BP)* | — |
| `UObject*` (raw) **with** `UPROPERTY` | ✅ Tracked (UE4 style) | ✅ Yes | Legacy/UE4 codebases | **Object Reference** | `Is Valid` |
| `TObjectPtr<T>` (UE5 default) | ✅ Tracked (strong) | ✅ Yes | **Normal member properties** that should keep refs alive | **Object Reference** | `Is Valid` |
| `TWeakObjectPtr<T>` | ✅ Tracked (non-owning) | ❌ No | Cache/observe objects without preventing GC | **Weak Object Reference** | `Is Valid` |
| `TSoftObjectPtr<T>` | ✅ Tracked (by asset path) | ❌ Not until loaded | Asset refs you want to **load on demand** | **Soft Object Reference** | `Is Valid`, `Load Asset`, `Async Load Asset` |
| `TSoftClassPtr<T>` | ✅ Tracked (by asset path) | ❌ Not until loaded | Class refs (Blueprint classes) to **load on demand** | **Soft Class Reference** | `Load Class Asset`, `Async Load Class Asset` |

## 7. Use Cases

- **Member property that should keep a UObject alive?** → `TObjectPtr<T>`
    - *Example: HUD keeps a reference to its health bar widget.*
- **You only want to observe something (don’t keep it alive)?** → `TWeakObjectPtr<T>`
    - *Example: Lock-on system tracks an enemy without preventing it from being destroyed.*
- **Reference to an asset/class that you don’t want loaded until needed?** → `TSoftObjectPtr<T>` / `TSoftClassPtr<T>`
    - *Example: Inventory slot stores a weapon icon texture, or spawn manager holds enemy Blueprint classes.*
- **Function params / locals where lifetime is guaranteed?** → raw `UObject*` (no `UPROPERTY`)
    - *Example: Utility function takes an actor to print its name.*
    - *No need for* `UPROPERTY`*, because you don’t keep it around after the function ends.*