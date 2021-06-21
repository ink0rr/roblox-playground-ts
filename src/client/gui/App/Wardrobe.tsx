import Roact from '@rbxts/roact'
import { BackgroundComponent } from "../Components/BackgroundComponent";
import { CardComponent } from '../Components/CardComponent';
import { TextBoxComponent } from '../Components/TextBoxComponent';
import { TextLabelComponent } from '../Components/TextLabelComponent';

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
                    Size={new UDim2(0.35, 0, 0.15, 0)}
                    SizeConstraint={"RelativeYY"}
                >
                    <uipadding
                        PaddingTop={new UDim(0.1, 0)}
                        PaddingBottom={new UDim(0.1, 0)}
                        PaddingLeft={new UDim(0.05, 0)}
                        PaddingRight={new UDim(0.05, 0)}
                    />
                    <CardComponent
                        AnchorPoint={new Vector2(0.5, 0.5)}
                        Position={new UDim2(0.5, 0, 0.5, 0)}
                        Size={new UDim2(1, 0, 1, 0)}
                    >
                        <uilistlayout
                            FillDirection={"Vertical"}
                            HorizontalAlignment={"Center"}
                            VerticalAlignment={"Center"}
                            Padding={new UDim(0, 18)}
                        />
                        <uipadding
                            PaddingTop={new UDim(0.1, 0)}
                            PaddingBottom={new UDim(0.1, 0)}
                            PaddingRight={new UDim(0.05, 0.)}
                        />
                        <frame
                            Position={new UDim2(0, 0, 0, 0)}
                            Size={new UDim2(1, 0, 0.35, 0)}
                            AnchorPoint={new Vector2(0, 0)}
                            BackgroundTransparency={1}
                        >
                            <uilistlayout
                                FillDirection={"Horizontal"}
                                HorizontalAlignment={"Center"}
                                VerticalAlignment={"Center"}
                                Padding={new UDim(0, 0)}
                            />
                            <TextLabelComponent
                                Text={"RP"}
                                TextScaled={true}
                                Position={new UDim2(0, 0, 0, 0)}
                                Size={new UDim2(0.3, 0, 1, 0)}
                            />
                            <TextBoxComponent
                                PlaceholderText={"Name"}
                                TextScaled={true}
                                Position={new UDim2(0, 0, 0, 0)}
                                Size={new UDim2(0.7, 0, 1, 0)}
                            />
                        </frame>
                        <frame
                            Position={new UDim2(0, 0, 0, 0)}
                            Size={new UDim2(1, 0, 0.35, 0)}
                            AnchorPoint={new Vector2(0, 0)}
                            BackgroundTransparency={1}
                        >
                            <uilistlayout
                                FillDirection={"Horizontal"}
                                HorizontalAlignment={"Center"}
                                VerticalAlignment={"Center"}
                                Padding={new UDim(0, 0)}
                            />
                            <TextLabelComponent
                                Text={"BIO"}
                                TextScaled={true}
                                Position={new UDim2(0, 0, 0, 0)}
                                Size={new UDim2(0.3, 0, 1, 0)}
                            />
                            <TextBoxComponent
                                PlaceholderText={"Insert Bio"}
                                TextScaled={true}
                                Position={new UDim2(0, 0, 0, 0)}
                                Size={new UDim2(0.7, 0, 1, 0)}
                            />
                        </frame>
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