namespace RoactType {
	export type Props<T> = { [P in keyof T]?: number };

	export function Instance() {
		return {
			Archivable: 0,
			Name: 0,
			Parent: 0,
		}
	}
	export function Camera() {
		return {
			...Instance(),
			CFrame: 0,
			CameraSubject: 0,
			CameraType: 0,
			CoordinateFrame: 0,
			DiagonalFieldOfView: 0,
			FieldOfView: 0,
			FieldOfViewMode: 0,
			Focus: 0,
			HeadLocked: 0,
			HeadScale: 0,
			MaxAxisFieldOfView: 0,
		}
	}
	export function GuiBase() {
		return {
			...Instance(),
		}
	}
	export function GuiBase2d() {
		return {
			...GuiBase(),
			AutoLocalize: 0,
			Localize: 0,
			RootLocalizationTable: 0,
		}
	}
	export function GuiObject() {
		return {
			...GuiBase2d(),
			Active: 0,
			AnchorPoint: 0,
			AutomaticSize: 0,
			BackgroundColor: 0,
			BackgroundColor3: 0,
			BackgroundTransparency: 0,
			BorderColor: 0,
			BorderColor3: 0,
			BorderMode: 0,
			BorderSizePixel: 0,
			ClipsDescendants: 0,
			Draggable: 0,
			LayoutOrder: 0,
			NextSelectionDown: 0,
			NextSelectionLeft: 0,
			NextSelectionRight: 0,
			NextSelectionUp: 0,
			Position: 0,
			Rotation: 0,
			Selectable: 0,
			SelectionImageObject: 0,
			Size: 0,
			SizeConstraint: 0,
			Transparency: 0,
			Visible: 0,
			ZIndex: 0,
		}
	}
	export function Frame() {
		return {
			...GuiObject(),
			Style: 0,
		}
	}
	export function GuiButton() {
		return {
			...GuiObject(),
			AutoButtonColor: 0,
			Modal: 0,
			Selected: 0,
			Style: 0,
		}
	}
	export function ImageButton() {
		return {
			...GuiButton(),
			HoverImage: 0,
			Image: 0,
			ImageColor3: 0,
			ImageRectOffset: 0,
			ImageRectSize: 0,
			ImageTransparency: 0,
			PressedImage: 0,
			ScaleType: 0,
			SliceCenter: 0,
			SliceScale: 0,
			TileSize: 0,
		}
	}
	export function TextButton() {
		return {
			...GuiButton(),
			Font: 0,
			FontSize: 0,
			LineHeight: 0,
			MaxVisibleGraphemes: 0,
			RichText: 0,
			Text: 0,
			TextColor: 0,
			TextColor3: 0,
			TextScaled: 0,
			TextSize: 0,
			TextStrokeColor3: 0,
			TextStrokeTransparency: 0,
			TextTransparency: 0,
			TextTruncate: 0,
			TextWrap: 0,
			TextWrapped: 0,
			TextXAlignment: 0,
			TextYAlignment: 0,
		}
	}
	export function GuiLabel() {
		return {
			...GuiObject(),
		}
	}
	export function ImageLabel() {
		return {
			...GuiLabel(),
			Image: 0,
			ImageColor3: 0,
			ImageRectOffset: 0,
			ImageRectSize: 0,
			ImageTransparency: 0,
			ScaleType: 0,
			SliceCenter: 0,
			SliceScale: 0,
			TileSize: 0,
		}
	}
	export function TextLabel() {
		return {
			...GuiLabel(),
			Font: 0,
			FontSize: 0,
			LineHeight: 0,
			MaxVisibleGraphemes: 0,
			RichText: 0,
			Text: 0,
			TextColor: 0,
			TextColor3: 0,
			TextScaled: 0,
			TextSize: 0,
			TextStrokeColor3: 0,
			TextStrokeTransparency: 0,
			TextTransparency: 0,
			TextTruncate: 0,
			TextWrap: 0,
			TextWrapped: 0,
			TextXAlignment: 0,
			TextYAlignment: 0,
		}
	}
	export function ScrollingFrame() {
		return {
			...GuiObject(),
			AutomaticCanvasSize: 0,
			BottomImage: 0,
			CanvasPosition: 0,
			CanvasSize: 0,
			ElasticBehavior: 0,
			HorizontalScrollBarInset: 0,
			MidImage: 0,
			ScrollBarImageColor3: 0,
			ScrollBarImageTransparency: 0,
			ScrollBarThickness: 0,
			ScrollingDirection: 0,
			ScrollingEnabled: 0,
			TopImage: 0,
			VerticalScrollBarInset: 0,
			VerticalScrollBarPosition: 0,
		}
	}
	export function TextBox() {
		return {
			...GuiObject(),
			ClearTextOnFocus: 0,
			CursorPosition: 0,
			Font: 0,
			FontSize: 0,
			LineHeight: 0,
			MaxVisibleGraphemes: 0,
			MultiLine: 0,
			PlaceholderColor3: 0,
			PlaceholderText: 0,
			RichText: 0,
			SelectionStart: 0,
			ShowNativeInput: 0,
			Text: 0,
			TextColor: 0,
			TextColor3: 0,
			TextEditable: 0,
			TextScaled: 0,
			TextSize: 0,
			TextStrokeColor3: 0,
			TextStrokeTransparency: 0,
			TextTransparency: 0,
			TextTruncate: 0,
			TextWrap: 0,
			TextWrapped: 0,
			TextXAlignment: 0,
			TextYAlignment: 0,
		}
	}
	export function ViewportFrame() {
		return {
			...GuiObject(),
			Ambient: 0,
			CurrentCamera: 0,
			ImageColor3: 0,
			ImageTransparency: 0,
			LightColor: 0,
			LightDirection: 0,
		}
	}
	export function LayerCollector() {
		return {
			...GuiBase2d(),
			Enabled: 0,
			ResetOnSpawn: 0,
			ZIndexBehavior: 0,
		}
	}
	export function BillboardGui() {
		return {
			...LayerCollector(),
			Active: 0,
			Adornee: 0,
			AlwaysOnTop: 0,
			Brightness: 0,
			ClipsDescendants: 0,
			DistanceLowerLimit: 0,
			DistanceStep: 0,
			DistanceUpperLimit: 0,
			ExtentsOffset: 0,
			ExtentsOffsetWorldSpace: 0,
			LightInfluence: 0,
			MaxDistance: 0,
			PlayerToHideFrom: 0,
			Size: 0,
			SizeOffset: 0,
			StudsOffset: 0,
			StudsOffsetWorldSpace: 0,
		}
	}
	export function ScreenGui() {
		return {
			...LayerCollector(),
			DisplayOrder: 0,
			IgnoreGuiInset: 0,
		}
	}
	export function SurfaceGui() {
		return {
			...LayerCollector(),
			Active: 0,
			Adornee: 0,
			AlwaysOnTop: 0,
			Brightness: 0,
			CanvasSize: 0,
			ClipsDescendants: 0,
			Face: 0,
			LightInfluence: 0,
			PixelsPerStud: 0,
			SizingMode: 0,
			ToolPunchThroughDistance: 0,
			ZOffset: 0,
		}
	}
	export function UIBase() {
		return {
			...Instance(),
		}
	}
	export function UIComponent() {
		return {
			...UIBase(),
		}
	}
	export function UIConstraint() {
		return {
			...UIComponent(),
		}
	}
	export function UIAspectRatioConstraint() {
		return {
			...UIConstraint(),
			AspectRatio: 0,
			AspectType: 0,
			DominantAxis: 0,
		}
	}
	export function UISizeConstraint() {
		return {
			...UIConstraint(),
			MaxSize: 0,
			MinSize: 0,
		}
	}
	export function UITextSizeConstraint() {
		return {
			...UIConstraint(),
			MaxTextSize: 0,
			MinTextSize: 0,
		}
	}
	export function UICorner() {
		return {
			...UIComponent(),
			CornerRadius: 0,
		}
	}
	export function UIGradient() {
		return {
			...UIComponent(),
			Color: 0,
			Enabled: 0,
			Offset: 0,
			Rotation: 0,
			Transparency: 0,
		}
	}
	export function UILayout() {
		return {
			...UIComponent(),
		}
	}
	export function UIGridStyleLayout() {
		return {
			...UILayout(),
			FillDirection: 0,
			HorizontalAlignment: 0,
			SortOrder: 0,
			VerticalAlignment: 0,
		}
	}
	export function UIGridLayout() {
		return {
			...UIGridStyleLayout(),
			CellPadding: 0,
			CellSize: 0,
			FillDirectionMaxCells: 0,
			StartCorner: 0,
		}
	}
	export function UIListLayout() {
		return {
			...UIGridStyleLayout(),
			Padding: 0,
		}
	}
	export function UIPageLayout() {
		return {
			...UIGridStyleLayout(),
			Animated: 0,
			Circular: 0,
			EasingDirection: 0,
			EasingStyle: 0,
			GamepadInputEnabled: 0,
			Padding: 0,
			ScrollWheelInputEnabled: 0,
			TouchInputEnabled: 0,
			TweenTime: 0,
		}
	}
	export function UITableLayout() {
		return {
			...UIGridStyleLayout(),
			FillEmptySpaceColumns: 0,
			FillEmptySpaceRows: 0,
			MajorAxis: 0,
			Padding: 0,
		}
	}
	export function UIPadding() {
		return {
			...UIComponent(),
			PaddingBottom: 0,
			PaddingLeft: 0,
			PaddingRight: 0,
			PaddingTop: 0,
		}
	}
	export function UIScale() {
		return {
			...UIComponent(),
			Scale: 0,
		}
	}
	export function UIStroke() {
		return {
			...UIComponent(),
			ApplyStrokeMode: 0,
			Color: 0,
			Enabled: 0,
			LineJoinMode: 0,
			Thickness: 0,
			Transparency: 0,
		}
	}
}

export default RoactType
