export function getGui(): ScreenGui {
	return getLocalPlayer().FindFirstChildOfClass("PlayerGui")?.WaitForChild("ScreenGui") as ScreenGui
}

export function getLocalPlayer(): Player {
	return game.GetService("Players").LocalPlayer
}

export function getCharacter(): Model | undefined {
	let localPlayer = getLocalPlayer()
	localPlayer.CharacterAdded.Wait()
	return localPlayer.Character
}

export function getHumanoid(character: Part | undefined = undefined): Humanoid {
	let currentCharacter = character === undefined ? getCharacter() : character
	return currentCharacter?.WaitForChild("Humanoid") as Humanoid
}

export function getHumanoidAnimator(humanoid: Humanoid | undefined = undefined): Animator {
	let currentHumanoid = humanoid === undefined ? getHumanoid() : humanoid
	return currentHumanoid.WaitForChild("Animator") as Animator
}