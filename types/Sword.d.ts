type Sword = Tool & {
	Blade: Part & {
		Weld: Weld;
	};
	Guard: Part & {
		Weld: Weld;
	};
	Handle: Part & {
		TouchInterest: TouchTransmitter;
	};
}
