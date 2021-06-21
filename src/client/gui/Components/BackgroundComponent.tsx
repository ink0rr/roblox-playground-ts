import Roact from "@rbxts/roact"

interface UIProps {
    AnchorPoint?: Vector2
    BackgroundColor3?: Color3
    Position: UDim2
    Size: UDim2
    SizeConstraint?: Enum.SizeConstraint | "RelativeXY" | "RelativeXX" | "RelativeYY"
}
interface UIState { }
export class BackgroundComponent extends Roact.Component<UIProps, UIState>  {
    static defaultProps = {
        BackgroundColor3: Color3.fromRGB(245, 59, 87)
    };
    constructor(props: UIProps) {
        super(props)
    }
    render() {
        return (
            <frame
                BackgroundColor3={this.props.BackgroundColor3}
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
