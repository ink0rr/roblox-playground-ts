export class MainGuiModule {
}

import Roact from '@rbxts/roact'
import {Players} from '@rbxts/services'
import {CustomBar} from "client/gui/CustomBar"

const localPlayer = Players.LocalPlayer
localPlayer.CharacterAdded.Wait()
const playerGui = localPlayer.FindFirstChild("PlayerGui")
const humanoid = localPlayer.Character?.WaitForChild("Humanoid") as Humanoid

function HUD() {
    return (
        <screengui
            ResetOnSpawn={false}>
            <frame
                Position={new UDim2(0, 10, 0, 10)}
                Size={new UDim2(0.8, 0, 0.1, 0)}
                BackgroundTransparency={1}
                BackgroundColor3={new Color3(1, 1, 1)}
                SizeConstraint={"RelativeXY"}
            >

                <uilistlayout
                    FillDirection={"Horizontal"}
                    HorizontalAlignment={"Left"}
                    VerticalAlignment={"Center"}
                    Padding={new UDim(0, 10)}
                    SortOrder={"Name"}
                />

                <imagelabel
                    Position={new UDim2(0, 0, 0, 0)}
                    Size={new UDim2(1, 0, 1, 0)}
                    BackgroundTransparency={0}
                    BackgroundColor3={new Color3(0, 0, 0)}
                    SizeConstraint={"RelativeYY"}
                />

                <frame
                    Position={new UDim2(0, 0, 0, 0)}
                    Size={new UDim2(0.8, 0, 1, 0)}
                    BackgroundTransparency={1}
                    BackgroundColor3={new Color3(0.5, 0.5, 0.5)}
                    SizeConstraint={"RelativeXY"}
                >

                    <uilistlayout
                        FillDirection={"Vertical"}
                        HorizontalAlignment={"Left"}
                        VerticalAlignment={"Top"}
                        Padding={new UDim(0, 5)}
                        SortOrder={"Name"}
                    />

                    <textlabel
                        Text={localPlayer.Character?.Name}
                        Font={"SourceSans"}
                        TextScaled={true}
                        AutomaticSize={"X"}
                        Size={new UDim2(0, 0, 0.35, 0)}
                    />
                    <CustomBar
                        color={new Color3(0,1,0)}
                    />
                </frame>
            </frame>
        </screengui>
    )
}

Roact.mount(<HUD/>, playerGui, "HUD")
