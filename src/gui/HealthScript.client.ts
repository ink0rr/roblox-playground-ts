export {};

const healthGui = script.Parent?.WaitForChild("HealthGui") as ScreenGui
const backgroundFrame = healthGui.WaitForChild("BackgroundFrame") as Frame
const healthFrame = backgroundFrame.WaitForChild("HealthFrame") as Frame
const healthBar = healthFrame.WaitForChild("HealthBar") as Frame

const humanoid = game.GetService("Players").LocalPlayer.Character?.WaitForChild("Humanoid") as Humanoid

humanoid.HealthChanged.Connect(health => {
  healthBar.TweenSize(new UDim2(humanoid.Health/100, 0, 1, 0), "Out", "Quint", 0.25)
})