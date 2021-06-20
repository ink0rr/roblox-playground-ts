import Roact from "@rbxts/roact"

interface UIProps {
    AnchorPoint: Vector2
    Position: UDim2
    Size: UDim2
}
interface UIState { }
export class BackgroundFrame extends Roact.Component<UIProps, UIState>  {
    constructor(props: UIProps) {
        super(props);
    }
    render() {
        return (
            <frame
                BackgroundColor3={new Color3(1, 1, 1)}
                AnchorPoint={this.props.AnchorPoint}
                Position={this.props.Position}
                Size={this.props.Size}
            >
                <uicorner
                    CornerRadius={new UDim(0, 16)}
                />
                <frame
                    BackgroundColor3={new Color3(0.8666666667, 0.3137254902, 0.3450980392)}
                    AnchorPoint={new Vector2(0.5, 0.5)}
                    Position={new UDim2(0.5, 0, 0.5, 0)}
                    Size={new UDim2(1, -12, 1, -12)}
                >
                    <uicorner
                        CornerRadius={new UDim(0, 12)}
                    />
                </frame>
            </frame>
        )
    }
}