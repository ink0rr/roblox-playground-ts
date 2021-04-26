import * as Utils from "shared/utils"

const runService = game.GetService("RunService")
const localPlayer = Utils.getLocalPlayer()
const camera = game.Workspace.CurrentCamera as Camera

const cameraDepth = 10

let character: Model
localPlayer.CharacterAdded.Connect((model) => {
  character = Utils.getCharacter() as Model
})

function isometricCamera() {
  if (character) {
    let humanoidRoot = character.FindFirstChild("HumanoidRootPart") as Part
    if (humanoidRoot) {
      let cameraOffset = new Vector3(1, 0, 1)
      let humanoidRootPos = humanoidRoot.Position.mul(cameraOffset)
      let cameraPos = new Vector3(
        humanoidRootPos.X + cameraDepth,
        cameraDepth * 1.5,
        humanoidRootPos.Z + cameraDepth
      )

      camera.CFrame = CFrame.lookAt(cameraPos, humanoidRootPos)
      camera.CFrame.ToWorldSpace(CFrame.lookAt(cameraPos, humanoidRootPos))
    }
  }
}

runService.RenderStepped.Connect(() => {
  if (!character) character = Utils.getCharacter() as Model
})
//runService.BindToRenderStep("IsometricCamera", Enum.RenderPriority.Camera.Value + 1, isometricCamera)
