import Roact from "@rbxts/roact"
import RoactHelper from "shared/framework/RoactHelper"
import RoactType from "shared/framework/RoactType"

interface UIProps extends Roact.JsxInstance<Frame> {
	BorderSizePixel?: number
	CornerRadius?: UDim
	Size?: UDim2
}

export class CoreFrame extends Roact.Component<UIProps> {
	private frameProps: Roact.PropsWithChildren

	constructor(props: UIProps) {
		super(props)
		this.frameProps = RoactHelper.filter(this.props, RoactType.Frame())
	}

	render() {
		return (
			<frame
				{...this.frameProps}
				BackgroundColor3={this.props.BorderColor3}
				Size={this.props.Size?.add(new UDim2(0, this.props.BorderSizePixel!, 0, this.props.BorderSizePixel!))}
			>
				<uicorner
					CornerRadius={this.props.CornerRadius?.add(new UDim(0, 2))}
				/>
				<frame
					{...this.frameProps}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(1, -this.props.BorderSizePixel!, 1, -this.props.BorderSizePixel!)}
					SizeConstraint={"RelativeXY"}
				>
					<uicorner
						CornerRadius={this.props.CornerRadius}
					/>
					{this.props[Roact.Children]}
				</frame>
			</frame>
		)
	}

	static defaultProps = {
		BackgroundColor3: Color3.fromRGB(51, 36, 34),
		BackgroundTransparency: 0.2,
		BorderColor3: Color3.fromRGB(118, 86, 60),
		BorderSizePixel: 6,
		CornerRadius: new UDim(0, 8),
	}
}
