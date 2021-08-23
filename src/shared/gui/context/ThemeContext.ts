import Roact from "@rbxts/roact"

export const ThemeContext = Roact.createContext({
	TextTheme: {
		Font: Enum.Font.Antique,
		TextColor3: Color3.fromRGB(255, 255, 255),
		TextStrokeColor3: Color3.fromRGB(255, 255, 255),
		TextStrokeTransparency: 0,
	},
})
