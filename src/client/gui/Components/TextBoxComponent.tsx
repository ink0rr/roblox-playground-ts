import Roact from "@rbxts/roact"

interface UIProps {
    AnchorPoint?: Vector2
    ClearTextOnFocus?: boolean
    Position: UDim2
    Size: UDim2
    SizeConstraint?: Enum.SizeConstraint | "RelativeXY" | "RelativeXX" | "RelativeYY"
    Font?: Enum.Font
    PlaceholderText?: string
    Text?: string
    TextColor3?: Color3
    TextScaled?: boolean
    TextSize?: number
}
interface UIState { }
export class TextBoxComponent extends Roact.Component<UIProps, UIState>  {
    static defaultProps = {
        ClearTextOnFocus: false,
        Font: Enum.Font.LuckiestGuy,
        Text: "",
        TextColor3: new Color3(1, 1, 1),
        TextSize: 24
    };
    constructor(props: UIProps) {
        super(props)
    }
    render() {
        return (
            <frame
                AnchorPoint={new Vector2(0, 0)}
                BackgroundTransparency={0}
                BackgroundColor3={Color3.fromRGB(131, 67, 81)}
                Position={this.props.Position}
                Size={this.props.Size}
                SizeConstraint={this.props.SizeConstraint}
            >
                <uicorner
                    CornerRadius={new UDim(0, 4)}
                />
                <textbox
                    AnchorPoint={this.props.AnchorPoint}
                    BackgroundColor3={Color3.fromRGB(134, 50, 62)}
                    ClearTextOnFocus={this.props.ClearTextOnFocus}
                    Font={this.props.Font}
                    Position={new UDim2(0, 0, 0, -4)}
                    Size={new UDim2(1, 0, 1, 0)}
                    PlaceholderText={this.props.PlaceholderText}
                    Text={this.props.Text}
                    TextColor3={new Color3(1, 1, 1)}
                    TextScaled={this.props.TextScaled}
                    TextSize={this.props.TextSize}
                >
                    <uicorner
                        CornerRadius={new UDim(0, 4)}
                    />
                    <uistroke
                        ApplyStrokeMode={"Border"}
                        Color={Color3.fromRGB(242, 114, 142)}
                        Thickness={2}
                        LineJoinMode={"Round"}
                    />
                    <uipadding
                        PaddingTop={new UDim(0.2, 0)}
                    />
                </textbox>
            </frame>
        )
    }
}
