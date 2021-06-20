import Roact from "@rbxts/roact"

interface UIProps {
    Image: string
    onActivated(): void
}
interface UIState {
    Size: UDim2

}
export class ImgBtn extends Roact.Component<UIProps, UIState>  {
    imageButtonRef: Roact.Ref<ImageButton>
    state = {
        Size: new UDim2(1, 0, 1, 0)
    }
    constructor(props: UIProps) {
        super(props);
        this.imageButtonRef = Roact.createRef<ImageButton>()
    }
    render() {
        return (
            <frame
                Size={new UDim2(1, 0, 1, 0)}
                BackgroundTransparency={1}
            >
                <imagebutton
                    Image={this.props.Image}
                    BackgroundTransparency={1}
                    AnchorPoint={new Vector2(0.5, 0.5)}
                    Position={new UDim2(0.5, 0, 0.5, 0)}
                    Size={this.state.Size}
                    Ref={this.imageButtonRef}
                    Event={{
                        Activated: () => {
                            this.props.onActivated()
                        },
                        MouseEnter: () => {
                            this.setState({
                                Size: new UDim2(1, 10, 1, 10)
                            })
                        },
                        MouseLeave: () => {
                            this.setState({
                                Size: new UDim2(1, 0, 1, 0)
                            })
                        },
                        MouseButton1Down: () => {
                            this.setState({
                                Size: new UDim2(1, -10, 1, -10)
                            })
                        },
                        MouseButton1Up: () => {
                            this.setState({
                                Size: new UDim2(1, 10, 1, 10)
                            })
                        }
                    }}
                />
            </frame>
        )
    }
}