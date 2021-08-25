import Net from "@rbxts/net"

namespace PetModule {
	export enum State {
		IDLE,
		WALK,
		SIT,
		SLEEP,
	}

	export const Event = Net.Definitions.Create({
		EquipPet: Net.Definitions.ClientToServerEvent<[]>(),
		StartFollow: Net.Definitions.ServerToClientEvent<[pet: Pet]>(),
		PetState: Net.Definitions.ClientToServerEvent<[state: State]>(),
	})
}

export default PetModule
