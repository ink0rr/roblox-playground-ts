import Roact from "@rbxts/roact"

interface UIProps {
    // Frame Props
    AnchorPoint?: Vector2
    Position: UDim2
    Size: UDim2
    SizeConstraint?: Enum.SizeConstraint | "RelativeXY" | "RelativeXX" | "RelativeYY"
    // TextBox Props
    BackgroundColor3?: Color3
    ClearTextOnFocus?: boolean
    Font?: Enum.Font
    PlaceholderText?: string
    Text?: string
    TextColor3?: Color3
    TextScaled?: boolean
    TextSize?: number
    TextXAlignment?: Enum.TextXAlignment | "Left" | "Center" | "Right"
    TextYAlignment?: Enum.TextYAlignment | "Center" | "Top" | "Bottom"
}
interface UIState { }
export class TextBoxComponent extends Roact.Component<UIProps, UIState>  {
    static defaultProps = {
        BackgroundColor3: Color3.fromRGB(134, 50, 62),
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
                AnchorPoint={this.props.AnchorPoint}
                BackgroundTransparency={1}
                Position={this.props.Position}
                Size={this.props.Size}
                SizeConstraint={this.props.SizeConstraint}
            >
                <frame
                    BackgroundTransparency={0}
                    BackgroundColor3={Color3.fromRGB(131, 67, 81)}
                    Position={new UDim2(0, 0, 0.1, 0)}
                    Size={new UDim2(1, 0, 1, 0)}
                >
                    <uicorner
                        CornerRadius={new UDim(0, 4)}
                    />
                    <textbox
                        {...this.props}
                        AnchorPoint={new Vector2(0, 0)}
                        BackgroundColor3={Color3.fromRGB(134, 50, 62)}
                        BackgroundTransparency={0}
                        Position={new UDim2(0, 0, -0.1, 0)}
                        Size={new UDim2(1, 0, 1, 0)}
                        SizeConstraint={"RelativeXY"}
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
            </frame>
        )
    }
}
