import Roact from "@rbxts/roact"

interface UIProps {
    AnchorPoint?: Vector2
    Font?: Enum.Font
    Position: UDim2
    Size: UDim2
    SizeConstraint?: Enum.SizeConstraint | "RelativeXY" | "RelativeXX" | "RelativeYY"
    Text?: string
    TextColor3?: Color3
    TextScaled?: boolean
    TextSize?: number
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
            <textlabel
                {...this.props}
                BackgroundTransparency={1}
                Position={this.props.Position.add(new UDim2(0, 0, 0, 4))}
                Text={this.props.Text}
                TextColor3={new Color3(this.props.TextColor3!.R - 0.75, this.props.TextColor3!.G - 0.75, this.props.TextColor3!.B - 0.75)}
            >
                <textlabel
                    {...this.props}
                    AnchorPoint={new Vector2(0, 0)}
                    BackgroundTransparency={1}
                    Position={new UDim2(0, 0, 0, -4)}
                    Size={new UDim2(1, 0, 1, 0)}
                />
            </textlabel>
        )
    }
}
