import Roact from "@rbxts/roact"

interface UIProps {
    AnchorPoint: Vector2
    Position: UDim2
    Size: UDim2
    SizeConstraint: "RelativeXY" | "RelativeXX" | "RelativeYY"
}
interface UIState { }
export class BackgroundFrame extends Roact.Component<UIProps, UIState>  {
    constructor(props: UIProps) {
        super(props);
    }
    render() {
        return (
            <frame
                BackgroundColor3={new Color3(0.9607843137, 0.2313725490, 0.3411764706)}
                AnchorPoint={this.props.AnchorPoint}
                Position={this.props.Position}
                Size={this.props.Size}
                SizeConstraint={this.props.SizeConstraint}
            >
                <uicorner
                    CornerRadius={new UDim(0, 8)}
                />
                <uistroke
                    ApplyStrokeMode={"Border"}
                    Color={new Color3(1, 1, 1)}
                    Thickness={4}
                    LineJoinMode={"Round"}
                />
                {this.props[Roact.Children]}
            </frame>
        )
    }
}