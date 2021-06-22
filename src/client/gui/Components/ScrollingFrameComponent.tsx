import Roact from "@rbxts/roact"

interface UIProps {
    AnchorPoint?: Vector2
    BackgroundColor3?: Color3
    Position: UDim2
    Size: UDim2
    SizeConstraint?: Enum.SizeConstraint | "RelativeXY" | "RelativeXX" | "RelativeYY"
}
interface UIState { }

export class ScrollingFrameComponent extends Roact.Component<UIProps, UIState>  {
    static defaultProps = {
        BackgroundColor3: Color3.fromRGB(236, 74, 105)
    };
    constructor(props: UIProps) {
        super(props)
    }
    render() {
        return (
            <frame
                AnchorPoint={this.props.AnchorPoint}
                BackgroundTransparency={1}
                ClipsDescendants={true}
                Position={this.props.Position}
                Size={this.props.Size}
                SizeConstraint={this.props.SizeConstraint}
            >
                <frame
                    BackgroundTransparency={1}
                    ClipsDescendants={true}
                    Position={new UDim2(0, 0, 0, 0)}
                    Size={new UDim2(1, -12, 1, 0)}
                >
                    <frame
                        AnchorPoint={new Vector2(0.5, 0)}
                        BackgroundColor3={this.props.BackgroundColor3}
                        Position={new UDim2(0.5, 0, 0.5, 0)}
                        Size={new UDim2(2, 0, 2, 0)}
                        SizeConstraint={"RelativeYY"}
                    >
                        <uicorner
                            CornerRadius={new UDim(0.5, 0)}
                        />
                    </frame>
                </frame>
                <scrollingframe
                    BackgroundTransparency={1}
                    BorderSizePixel={0}
                    Position={new UDim2(0, 0, 0, 0)}
                    ScrollingDirection={"Y"}
                    Size={new UDim2(1, 0, 1, 0)}
                    VerticalScrollBarInset={"Always"}
                >
                    {this.props[Roact.Children]}
                </scrollingframe>
            </frame>
        )
    }
}
