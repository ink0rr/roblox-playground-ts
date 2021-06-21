import Roact from '@rbxts/roact'
import { BackgroundComponent } from "../Components/BackgroundComponent";
import { CardComponent } from '../Components/CardComponent';

export class Wardrobe {
    playerGui: PlayerGui
    panel: Roact.Tree
    constructor(playerGui: PlayerGui) {
        this.playerGui = playerGui
        const element = (
            <screengui
                ResetOnSpawn={false}
            >
                <BackgroundComponent
                    AnchorPoint={new Vector2(1, 0)}
                    Position={new UDim2(0.8, 0, 0.1, 0)}
                    Size={new UDim2(0.3, 0, 0.2, 0)}
                >
                    <CardComponent
                        AnchorPoint={new Vector2(0.5, 0.5)}
                        Position={new UDim2(0.5, 0, 0.5, 0)}
                        Size={new UDim2(0.9, 0, 0.7, 0)}
                    >
                    </CardComponent>
                </BackgroundComponent>
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