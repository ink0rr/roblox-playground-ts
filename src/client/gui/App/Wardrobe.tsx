import Roact from '@rbxts/roact'
import { BackgroundFrame } from "../Components/BackgroundFrame";

export class Wardrobe {
    playerGui: PlayerGui
    panel: Roact.Tree
    constructor(playerGui: PlayerGui) {
        this.playerGui = playerGui
        const element = (
            <screengui
                ResetOnSpawn={false}
            >
                <BackgroundFrame
                    AnchorPoint={new Vector2(0, 0)}
                    Position={new UDim2(0.7, 0, 0.1, 0)}
                    Size={new UDim2(0.3, 0, 0.2, 0)}
                    SizeConstraint={"RelativeYY"}
                >
                </BackgroundFrame>
            </screengui>
        )
        this.panel = Roact.mount(element, playerGui, "Wardrobe")
    }
    destroy() {
        if (this.panel !== undefined) {
            Roact.unmount(this.panel)
        }
    }
}