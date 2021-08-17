import Roact from "@rbxts/roact"

namespace RoactHelper {
	export class RoactBinding<T> {
		private readonly setter
		private readonly getter

		constructor(defaultValue: T) {
			const [getter, setter] = Roact.createBinding(defaultValue)
			this.getter = getter
			this.setter = setter
		}

		getBinding() {
			return this.getter
		}

		getValue(): T {
			return this.getter.getValue()
		}

		setValue(data: T) {
			this.setter(data)
		}

		map<U>(predicate: (value: T) => U): Roact.Binding<U> {
			return this.getter.map(predicate)
		}
	}

	export function extractChild(props: Roact.PropsWithChildren) {
		const child = props[Roact.Children]
		props[Roact.Children] = undefined
		return child
	}

	type ForceNumber<T> = { [P in keyof T]?: T[P] | number };

	export function filter<T, U extends ForceNumber<Instance>>(props: T, filterType: U) {
		const _props = props as unknown as Map<unknown, unknown>
		const _filterType = filterType as unknown as Map<unknown, unknown>
		_filterType.forEach((value, key) => {
			_filterType.set(key, _props.get(key))
		})
		return _filterType as Roact.PropsWithChildren
	}
}

export default RoactHelper
