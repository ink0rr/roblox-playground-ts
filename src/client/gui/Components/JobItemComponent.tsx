import Roact from "@rbxts/roact"
import { ButtonComponent } from "./ButtonComponent";

interface UIProps {
    list?: string[]
}
interface UIState { }
export class JobItemComponent extends Roact.Component<UIProps, UIState>  {
    constructor(props: UIProps) {
        super(props)
        this.props.list = ["1", "2"]
    }
    render() {
        return (
            <Roact.Fragment>
                {this.props.list!.map(i => {
                    return (
                        <ButtonComponent
                            Image={"rbxassetid://6978817700"}
                            onActivated={() => {
                                warn("bla")
                            }}
                        />
                    )
                })}
            </Roact.Fragment>
        )
    }
}
