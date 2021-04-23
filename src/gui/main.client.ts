export {};

let starterGuiService = game.GetService("StarterGui")
starterGuiService.SetCoreGuiEnabled(Enum.CoreGuiType.Health, false)
starterGuiService.SetCoreGuiEnabled(Enum.CoreGuiType.Chat, false)

// const screenGui = script.Parent?.WaitForChild("ScreenGui") as ScreenGui
// const textButton = screenGui?.WaitForChild("TextButton") as TextButton
// textButton.MouseButton1Click.Connect(() => print("clicked"))