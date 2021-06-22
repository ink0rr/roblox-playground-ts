import Roact from '@rbxts/roact'
import { BackgroundComponent } from "../Components/BackgroundComponent";
import { CardComponent } from '../Components/CardComponent';
import { ScrollingFrameComponent } from '../Components/ScrollingFrameComponent';
import { TextLabelComponent } from '../Components/TextLabelComponent';
import { JobItemComponent } from '../Components/JobItemComponent';

export class JobList {
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
                    Position={new UDim2(0.8, 0, 0.27, 0)}
                    Size={new UDim2(0.35, 0, 0.5, 0)}
                    SizeConstraint={"RelativeYY"}
                >
                    <uipadding
                        PaddingTop={new UDim(0.05, 0)}
                        PaddingBottom={new UDim(0.05, 0)}
                        PaddingLeft={new UDim(0.05, 0)}
                        PaddingRight={new UDim(0.05, 0)}
                    />
                    <uilistlayout
                        FillDirection={"Vertical"}
                        HorizontalAlignment={"Center"}
                        VerticalAlignment={"Center"}
                        Padding={new UDim(0, 18)}
                    />
                    <TextLabelComponent
                        Text={"Jobs"}
                        TextScaled={true}
                        Position={new UDim2(0, 0, 0, 0)}
                        Size={new UDim2(1, 0, 0.1, 0)}
                    />
                    <CardComponent
                        AnchorPoint={new Vector2(0.5, 0.5)}
                        Position={new UDim2(0, 0, 0, 0)}
                        Size={new UDim2(1, 0, 0.9, 0)}
                    >
                        <ScrollingFrameComponent
                            Position={new UDim2(0, 0, 0, 0)}
                            Size={new UDim2(1, 0, 1, 0)}
                        >
                            <frame
                                AnchorPoint={new Vector2(0.5, 0.5)}
                                BackgroundTransparency={1}
                                Position={new UDim2(0.5, 0, 0.5, 0)}
                                Size={new UDim2(1, -12, 1, -12)}
                            >
                                <uigridlayout
                                    CellPadding={new UDim2(0.05, 0, 0, 12)}
                                    CellSize={new UDim2(0.3, 0, 0.3, 0)}
                                    FillDirection={"Horizontal"}
                                    FillDirectionMaxCells={3}
                                    HorizontalAlignment={"Left"}
                                >
                                    <uiaspectratioconstraint
                                        AspectRatio={1}
                                        AspectType={"FitWithinMaxSize"}
                                        DominantAxis={"Width"}
                                    />
                                </uigridlayout>
                                <JobItemComponent />
                            </frame>
                        </ScrollingFrameComponent>
                    </CardComponent>
                </BackgroundComponent>
            </screengui>
        )
        this.panel = Roact.mount(element, playerGui, "JobList")
    }
    destroy() {
        if (this.panel !== undefined) {
            Roact.unmount(this.panel)
        }
    }
}