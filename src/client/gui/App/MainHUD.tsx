import Roact from '@rbxts/roact'
import { Players } from '@rbxts/services'
import { ImgBtn } from "../Components/ImgBtn";
import { BackgroundFrame } from "../Components/BackgroundFrame";

const localPlayer = Players.LocalPlayer
localPlayer.CharacterAdded.Wait()
const playerGui = localPlayer.FindFirstChild("PlayerGui")

export class MainHUD {
    scrGui: Roact.Ref<ScreenGui>
    constructor() {
        this.scrGui = Roact.createRef<ScreenGui>()
        const element = (
            <screengui
                ResetOnSpawn={false}
                Ref={this.scrGui}
            >
                <frame
                    Position={new UDim2(0, 32, 0.6, 0)}
                    Size={new UDim2(0.12, 0, 0.12, 0)}
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
                    <ImgBtn
                        Image={"rbxassetid://6979153487"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                    <ImgBtn
                        Image={"rbxassetid://6979153371"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                </frame>
                <frame
                    Position={new UDim2(1, -32, 0.6, 0)}
                    Size={new UDim2(0.1, 0, 0.1, 0)}
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

                    <ImgBtn
                        Image={"rbxassetid://6978817492"}
                        onActivated={() => {
                            Roact.mount(
                                <BackgroundFrame
                                    AnchorPoint={new Vector2(0.5, 0.5)}
                                    Position={new UDim2(0.5, 0, 0.5, 0)}
                                    Size={new UDim2(0.6, 0, 0.6, 0)}
                                />,
                                this.scrGui.getValue(), "BG")
                        }}
                    />
                    <ImgBtn
                        Image={"rbxassetid://6978817965"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                    <ImgBtn
                        Image={"rbxassetid://6978817700"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                    <ImgBtn
                        Image={"rbxassetid://6978817583"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                    <ImgBtn
                        Image={"rbxassetid://6978817796"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                    <ImgBtn
                        Image={"rbxassetid://6968301051"}
                        onActivated={() => {
                            warn("bla")
                        }}
                    />
                </frame>
            </screengui>
        )
        Roact.mount(element, playerGui, "HUD")
    }
}