import Roact from "@rbxts/roact"

interface UIProps {
    AnchorPoint?: Vector2
    BackgroundColor3?: Color3
    Position: UDim2
    Size: UDim2
    SizeConstraint?: Enum.SizeConstraint
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
                BackgroundColor3={new Color3(this.props.BackgroundColor3!.R - 0.2, this.props.BackgroundColor3!.G - 0.2, this.props.BackgroundColor3!.B - 0.2)}
                AnchorPoint={this.props.AnchorPoint}
                Position={this.props.Position.add(new UDim2(0, 0, 0.05, 0))}
                Size={this.props.Size}
                SizeConstraint={this.props.SizeConstraint}
            >
                <uicorner
                    CornerRadius={new UDim(0, 8)}
                />
                <frame
                    BackgroundColor3={this.props.BackgroundColor3}
                    Position={new UDim2(0, 0, -0.05, 0)}
                    Size={new UDim2(1, 0, 1, 0)}
                    SizeConstraint={this.props.SizeConstraint}
                >
                    <uicorner
                        CornerRadius={new UDim(0, 8)}
                    />
                    {this.props[Roact.Children]}
                </frame>
            </frame>
        )
    }
}
