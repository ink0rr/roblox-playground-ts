import Roact from '@rbxts/roact'
import { Players } from '@rbxts/services'
import { ButtonComponent } from "../Components/ButtonComponent";
import { Wardrobe } from './Wardrobe';

const localPlayer = Players.LocalPlayer
localPlayer.CharacterAdded.Wait()
const playerGui = localPlayer.FindFirstChild("PlayerGui") as PlayerGui

export class MainHUD {
    constructor() {
        let isWardrobe = false
        let wd: Wardrobe
        const element = (
            <screengui
                ResetOnSpawn={false}
            >
                <frame
                    Position={new UDim2(0, 32, 0.6, 0)}
                    Size={new UDim2(0.15, 0, 0.15, 0)}
                    AnchorPoint={new Vector2(0, 0)}
                    BackgroundTransparency={1}
                    SizeConstraint={"RelativeYY"}
                >
                    <uilistlayout
                        FillDirection={"Vertical"}
                        HorizontalAlignment={"Center"}
                        VerticalAlignment={"Top"}
                        Padding={new UDim(0, 0)}
                    />
                    <ButtonComponent
                        Image={"rbxassetid://6979153487"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                    <ButtonComponent
                        Image={"rbxassetid://6979153371"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                </frame>
                <frame
                    Position={new UDim2(1, -32, 0.5, 0)}
                    Size={new UDim2(0.12, 0, 0.12, 0)}
                    AnchorPoint={new Vector2(1, 0.5)}
                    BackgroundTransparency={1}
                    SizeConstraint={"RelativeYY"}
                >
                    <uilistlayout
                        FillDirection={"Vertical"}
                        HorizontalAlignment={"Center"}
                        VerticalAlignment={"Center"}
                        Padding={new UDim(0, 0)}
                    />

                    <ButtonComponent
                        Image={"rbxassetid://6978817492"}
                        onActivated={() => {
                            if (!isWardrobe) {
                                wd = new Wardrobe(playerGui)
                            } else {
                                wd.destroy()
                            }
                            isWardrobe = !isWardrobe
                        }}
                    />
                    <ButtonComponent
                        Image={"rbxassetid://6978817965"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                    <ButtonComponent
                        Image={"rbxassetid://6978817700"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                    <ButtonComponent
                        Image={"rbxassetid://6978817583"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                    <ButtonComponent
                        Image={"rbxassetid://6978817796"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                    <ButtonComponent
                        Image={"rbxassetid://6968301051"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                </frame>
            </screengui>
        )
        Roact.mount(element, playerGui, "MainHUD")
    }
}