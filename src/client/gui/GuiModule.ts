import { MainHUD } from "./App/MainHUD"

const runService = game.GetService("RunService")
export class GuiModule {
    constructor() {
        wait(1)
        new MainHUD()
    }
}