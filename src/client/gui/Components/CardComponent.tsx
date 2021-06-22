import Roact from "@rbxts/roact"

interface UIProps {
    // Frame Props
    AnchorPoint?: Vector2
    Position: UDim2
    Size: UDim2
    SizeConstraint?: Enum.SizeConstraint | "RelativeXY" | "RelativeXX" | "RelativeYY"
    // Card Props
    BackgroundColor3?: Color3
}
interface UIState { }
export class CardComponent extends Roact.Component<UIProps, UIState>  {
    static defaultProps = {
        BackgroundColor3: Color3.fromRGB(239, 87, 119),
    };
    constructor(props: UIProps) {
        super(props)
    }
    render() {
        return (
            <frame
                AnchorPoint={this.props.AnchorPoint}
                BackgroundTransparency={1}
                Position={this.props.Position}
                Size={this.props.Size}
                SizeConstraint={this.props.SizeConstraint}>
                <frame
                    BackgroundColor3={new Color3(this.props.BackgroundColor3!.R - 0.2, this.props.BackgroundColor3!.G - 0.2, this.props.BackgroundColor3!.B - 0.2)}
                    Position={new UDim2(0, 0, 0, 4)}
                    Size={new UDim2(1, 0, 1, 0)}
                >
                    <uicorner
                        CornerRadius={new UDim(0, 8)}
                    />
                    <frame
                        BackgroundColor3={this.props.BackgroundColor3}
                        Position={new UDim2(0, 0, 0, -4)}
                        Size={new UDim2(1, 0, 1, 0)}
                    >
                        <uicorner
                            CornerRadius={new UDim(0, 8)}
                        />
                        {this.props[Roact.Children]}
                    </frame>
                </frame>
            </frame>
        )
    }
}
