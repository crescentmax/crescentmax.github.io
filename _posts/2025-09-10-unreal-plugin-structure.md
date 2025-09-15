
Basic structure and configurations of an unreal engine C++ plugin.

---

# Unreal Plugin Structure

## 1. Core Concepts

### Plugin

- A ****plugin is a self-contained package of functionality.
- **It can contain one or more modules.**  (e.g., `CoreLogic`, `UI`, `EditorExtensions`)
- **It may have dependencies on other plugins.** (e.g., `VirtualCamera`)
- Defined by a `.uplugin` file.

### Module

- A **module** is a code unit (a set of `.cpp/.h` files) that can be compiled independently.
- Each module has a corresponding `.Build.cs` file.
- **All C++ code must live in modules**.

| Concept | File/Structure | Description |
| --- | --- | --- |
| **Plugin** | `MyPlugin/` + `MyPlugin.uplugin` | High-level container. Contains `Source/`, `Resources/`, etc. |
| **Module** | `Source/ModuleName/` | C++ code lives here (must match module name). |
| **Module Info** | Declared inside `.uplugin` → `"Modules"` array | Tells Unreal which modules to load for the plugin. |
| **Build Rules** | `Source/ModuleName/ModuleName.Build.cs` | C# file that defines module dependencies, settings, etc. |

## 1. Ensure the Plugin Directory Structure

```cpp
// Basic Structure
MyProject/
└── Plugins/
    └── MyPlugin/
        ├── Resources/
        ├── Source/
        │   └── MyPlugin/
        │       ├── Public/
        │       │   └── MyPlugin.h
        │       │   └── MyClass.h
        │       ├── Private/
        │       │   └── MyPlugin.cpp
        │       │   └── MyClass.cpp
        │       └── MyPlugin.Build.cs
        └── MyPlugin.uplugin
        
// Plugin with multiple modules
└── Plugins/
		└── MyPlugin/
		    ├── Resources/
		    ├── Source/
		    │   ├── MyPluginRuntime/
		    │   │   ├── Public/
		    │   │   ├── Private/
		    │   │   └── YourPluginRuntime.Build.cs
		    │   └── MyPluginEditor/
		    │       ├── Public/
		    │       ├── Private/
		    │       └── MyPluginEditor.Build.cs
		    └── MyPlugin.uplugin
```

- Folder name under `Source` must match the plugin name and module name.

## 2. Add `.cpp`  and `.h` file

```cpp
// Public/MyPlugin.h
#pragma once

#include "CoreMinimal.h"
#include "Modules/ModuleManager.h"

class FMyModule : public IModuleInterface
{
public:
    virtual void StartupModule() override;
    virtual void ShutdownModule() override;
};
```

```cpp
// Private/MyPlugin.cpp
#include "MyPlugin.h"
#include "Modules/ModuleManager.h"

IMPLEMENT_MODULE(FMyModule, MyPlugin);

void FMyModule::StartupModule()
{
    // Init stuff here
}

void FMyModule::ShutdownModule()
{
    // Cleanup
}

```

## 3. Add `MyPlugin.Build.cs`

```cpp
// Source/MyPluginName/MyPlugin.Build.cs
using UnrealBuildTool;

public class MyPlugin : ModuleRules
{
    public MyPlugin(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

        PublicDependencyModuleNames.AddRange(new string[]
        {
            "Core",
            "CoreUObject",
            "Engine",
            "InputCore",
            "UMG"
        });

        PrivateDependencyModuleNames.AddRange(new string[] { });
    }
}

```

## 4. Update `.uplugin` file

Add a `“Modules”` section:

```cpp
// Plugins/MyPlugin/MyPlugin.uplugin

// Plugin with one module
{
  "FileVersion": 3,
  "Version": 1,
  "VersionName": "1.0",
  "FriendlyName": "My Plugin",
  "Description": "Now with C++ support!",
  "Category": "Other",
  "EngineVersion": "5.4.0",
  "CanContainContent": true,
  "Installed": false,
  "Modules": [
    {                     // This name should be same as the name 
	    "Name": "MyPlugin", // implemented in IMPLEMENT_MODULE(FMyModule, MyPlugin);
      "Type": "Runtime",
      "LoadingPhase": "Default"
    }
  ]
}

// Plugin with one module
{
  "FileVersion": 3,
  "Version": 1,
  "FriendlyName": "My Plugin",
  "Description": "A plugin with multiple modules and plugin dependencies.",
  "Category": "Gameplay",
  "CreatedBy": "Name",
  "CreatedByURL": "https://yourdomain.com",
  "Modules": [
    {
      "Name": "MyPluginRuntime",
      "Type": "Runtime",
      "LoadingPhase": "Default"
    },
    {
      "Name": "MyPluginEditor",
      "Type": "Editor",
      "LoadingPhase": "Default"
    }
  ],
   "Plugins": [
    {
      "Name": "VirtualCamera",
      "Enabled": true,
      "SupportedTargetPlatforms": [ "Win64" ]
    }
  ]
}

```

## 5. Rebuild Project

1. **Close Unreal Editor**
2. Right-click your `.uproject` → **Generate Visual Studio project files**.
3. Open your `.uproject` with IDE.
4. Build the project. 

## 6. Verify and Use

Now your plugin supports both Blueprint and C++.

- You can now define `UObjects`, `UUserWidgets`, etc. in C++.
- You can expose C++ classes to Blueprint by adding `UCLASS(Blueprintable)` or `UFUNCTION(BlueprintCallable)`.

### Optional Test Widget Example

```cpp
// MyWidget.h
#pragma once

#include "CoreMinimal.h"
#include "Blueprint/UserWidget.h"
#include "MyWidget.generated.h"    // generated.h should always be the last one included

UCLASS()
class MYPLUGINNAME_API UMyWidget : public UUserWidget
{
    GENERATED_BODY()

public:
    virtual void NativeConstruct() override;
};

```

```cpp
// MyWidget.cpp
#include "MyWidget.h"

void UMyWidget::NativeConstruct()
{
    Super::NativeConstruct();
    // Your initialization logic
}

```

## 7. Check list

- [ ]  Plugin folder structure is valid
- [ ]  `.uplugin` has `"Modules"` section
- [ ]  `.Build.cs` added
- [ ]  `.cpp` and `.h` files created
- [ ]  Project regenerated and rebuilt
- [ ]  Rider/VS detects symbols
- [ ]  Plugin usable in both BP and C++