import Roact from "@rbxts/roact"
import RoactHelper from "shared/framework/RoactHelper"
import { ThemeContext } from "../context/ThemeContext"

interface UIProps extends Roact.JsxInstance<TextLabel> {}

export class CoreTextLabel extends Roact.Component<UIProps> {
	private roactChild
	constructor(props: UIProps){
		super(props)
		this.roactChild = RoactHelper.extractChild(this.props)
	}
	render(){
		return (
			<ThemeContext.Consumer
				render={(theme) => {
					return (
						<textlabel
							{...theme.TextTheme}
							{...this.props}
						>
							{this.roactChild}
						</textlabel>
					)
				}}
			>
			</ThemeContext.Consumer>
		)
	}
	static defaultProps = {
		BackgroundTransparency: 1,
		TextScaled: true,
	}
}
