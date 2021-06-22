import Roact from "@rbxts/roact"

interface UIProps {
    // Frame Props
    AnchorPoint?: Vector2
    Position: UDim2
    Size: UDim2
    SizeConstraint?: Enum.SizeConstraint | "RelativeXY" | "RelativeXX" | "RelativeYY"
    // Text Props
    Font?: Enum.Font
    Text?: string
    TextColor3?: Color3
    TextScaled?: boolean
    TextSize?: number
    TextXAlignment?: Enum.TextXAlignment | "Left" | "Center" | "Right"
    TextYAlignment?: Enum.TextYAlignment | "Center" | "Top" | "Bottom"
}
interface UIState { }
export class TextLabelComponent extends Roact.Component<UIProps, UIState>  {
    static defaultProps = {
        Font: Enum.Font.LuckiestGuy,
        Text: "TextView",
        TextColor3: new Color3(1, 1, 1),
        TextSize: 24
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
                SizeConstraint={this.props.SizeConstraint}
            >
                <uipadding
                    PaddingTop={new UDim(0.2, 0)}
                />
                <textlabel
                    {...this.props}
                    AnchorPoint={new Vector2(0, 0)}
                    BackgroundTransparency={1}
                    Position={new UDim2(0, 0, 0.1, 0)}
                    Size={new UDim2(1, 0, 1, 0)}
                    SizeConstraint={"RelativeXY"}
                    TextColor3={new Color3(this.props.TextColor3!.R - 0.75, this.props.TextColor3!.G - 0.75, this.props.TextColor3!.B - 0.75)}
                >
                    <textlabel
                        {...this.props}
                        AnchorPoint={new Vector2(0, 0)}
                        BackgroundTransparency={1}
                        Position={new UDim2(0, 0, -0.1, 0)}
                        Size={new UDim2(1, 0, 1, 0)}
                        SizeConstraint={"RelativeXY"}
                    />
                </textlabel>
            </frame>
        )
    }
}
