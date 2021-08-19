import Roact from "@rbxts/roact"
import RoactHelper from "shared/framework/RoactHelper"

interface UIProps extends Roact.JsxInstance<TextLabel> {}

export class CoreTextLabel extends Roact.Component<UIProps> {
	private roactChild
	constructor(props: UIProps){
		super(props)
		this.roactChild = RoactHelper.extractChild(this.props)
	}
	render(){
		return (
			<textlabel
				{...this.props}
			>
				{this.roactChild}
			</textlabel>
		)
	}
	static defaultProps = {
		BackgroundTransparency: 1,
		Font: Enum.Font.Antique,
		TextColor3: Color3.fromRGB(255, 255, 255),
		TextScaled: true,
		TextStrokeTransparency: 0,
	}
}
