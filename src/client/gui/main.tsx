export class MainGuiModule {
}

import Roact, {update} from '@rbxts/roact'
import {Players} from '@rbxts/services'

const localPlayer = Players.LocalPlayer
localPlayer.CharacterAdded.Wait()
const playerGui = localPlayer.FindFirstChild("PlayerGui")
const humanoid = localPlayer.Character?.WaitForChild("Humanoid") as Humanoid

function UI() {
    const healthBackgroundFrame: Roact.Ref<Frame> = Roact.createRef()
    const healthFrame: Roact.Ref<Frame> = Roact.createRef()

    function getBackgroundHealthSize() {
        return new UDim2(0.8 * humanoid.MaxHealth / 250, 0, 0.1, 0)
    }
    function getHealthSize(health: number) {
        return new UDim2(1 * health / humanoid.MaxHealth, 0, 1, 0)
    }
    humanoid.HealthChanged.Connect(health => {
        healthBackgroundFrame?.getValue()?.TweenSize(getBackgroundHealthSize(), "Out", "Quint", 0.25)
        healthFrame?.getValue()?.TweenSize(getHealthSize(health), "Out", "Quint", 0.25)
    })

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

                    <frame
                        Size={getBackgroundHealthSize()}
                        Ref={healthBackgroundFrame}
                        BackgroundTransparency={0}
                        BackgroundColor3={new Color3(0.5, 0.5, 0.5)}
                        SizeConstraint={"RelativeXY"}>

                        <frame
                            Size={getHealthSize(humanoid.Health)}
                            Ref={healthFrame}
                            BackgroundTransparency={0}
                            BackgroundColor3={new Color3(0, 1, 0)}
                            SizeConstraint={"RelativeXY"}
                        />
                    </frame>

                    <frame
                        Size={new UDim2(0.35, 100, 0.1, 0)}
                        BackgroundTransparency={0}
                        BackgroundColor3={new Color3(1, 1, 0)}
                        SizeConstraint={"RelativeXY"}
                    />
                </frame>
            </frame>
        </screengui>
    )
}

Roact.mount(<UI/>, playerGui, "UI")
