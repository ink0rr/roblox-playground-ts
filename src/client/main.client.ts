import {MainGuiModule} from "client/gui/main"

new MainGuiModule()
/*
import {IsometricCameraModule} from "./camera/isometric_camera"

new IsometricCameraModule()
const character = PlayerUtils.getCharacter()

let starterGuiService = game.GetService("StarterGui")
starterGuiService.SetCoreGuiEnabled(Enum.CoreGuiType.Health, false)
starterGuiService.SetCoreGuiEnabled(Enum.CoreGuiType.Chat, false)

const screenGui = script.Parent?.WaitForChild("ScreenGui") as ScreenGui
const textButton = screenGui?.WaitForChild("TextButton") as TextButton
textButton.MouseButton1Click.Connect(() => print("clicked"))
*/