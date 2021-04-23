type Sword = Tool & {
	Handle: Part & {
		TouchInterest: TouchTransmitter;
	};
	Guard: Part & {
		Weld: Weld;
	};
	Blade: Model & {
		Body: Part & {
			Weld: Weld;
		};
		Tip: WedgePart & {
			Weld: Weld;
		};
	};
}
