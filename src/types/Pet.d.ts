type Pet = Model & {
	Animation: Folder & {
		Idle: Animation
		Run: Animation
		Sit: Animation
		Sitting: Animation
		Stand: Animation
		Walk: Animation
	}
	Model: Model & {
		HumanoidRootPart: Part
	}
	Base: Part
}
