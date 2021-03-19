export {};

const screenGui = script.Parent?.WaitForChild("ScreenGui") as ScreenGui
const textButton = screenGui?.WaitForChild("TextButton") as TextButton
textButton.MouseButton1Click.Connect(() => print("clicked"))