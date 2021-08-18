import { Players } from "@rbxts/services"

namespace PlayerUtils {
	export function getLocalPlayer(): Player {
		return Players.LocalPlayer
	}

	export function getPlayerGui(): PlayerGui {
		return getLocalPlayer().FindFirstChild("PlayerGui") as PlayerGui
	}

	export function getCharacter(): Model {
		getLocalPlayer().CharacterAdded.Wait()
		return getLocalPlayer().Character as Model
	}

	export function getHumanoid(): Humanoid {
		return getCharacter().FindFirstChild("Humanoid") as Humanoid
	}
}

export default PlayerUtils
