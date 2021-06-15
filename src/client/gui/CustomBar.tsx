import Roact from "@rbxts/roact"
import {Players} from "@rbxts/services"

interface Props {
    color: Color3
}
export class CustomBar extends Roact.Component<Props>  {
    constructor(props: Props) {
        super(
            {
                color: props.color
            }
        );
        print("constructor")
    }
    didMount() {
        print("didMount")
    }
    render() {
        print("render")
        let localPlayer = Players.LocalPlayer
        let humanoid = localPlayer.Character?.WaitForChild("Humanoid") as Humanoid
        humanoid.HealthChanged.Connect(health => {
            healthBackgroundFrame?.getValue()?.TweenSize(getBackgroundHealthSize(), "Out", "Quint", 0.25)
            healthFrame?.getValue()?.TweenSize(getHealthSize(health), "Out", "Quint", 0.25)
        })
        const healthBackgroundFrame: Roact.Ref<Frame> = Roact.createRef()
        const healthFrame: Roact.Ref<Frame> = Roact.createRef()
        function getBackgroundHealthSize() {
            return new UDim2(0.8 * humanoid.MaxHealth / 250, 0, 0.1, 0)
        }

        function getHealthSize(health: number) {
            return new UDim2(health / humanoid.MaxHealth, 0, 1, 0)
        }
        return (
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
                    BackgroundColor3={this.props.color}
                    SizeConstraint={"RelativeXY"}
                />
            </frame>
        )
    }
}