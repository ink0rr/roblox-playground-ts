import * as PlayerUtil from "shared/player_util"

const runService = game.GetService("RunService")
const localPlayer = PlayerUtil.getLocalPlayer()
const camera = game.Workspace.CurrentCamera as Camera

const cameraDepth = 16

let character: Model
localPlayer.CharacterAdded.Connect((model) => {
  character = PlayerUtil.getCharacter() as Model
})

function isometricCamera() {
  if (character) {
    let humanoidRoot = character.FindFirstChild("HumanoidRootPart") as Part
    if (humanoidRoot) {
      let cameraOffset = new Vector3(1, 0, 1)
      let humanoidRootPos = humanoidRoot.Position.mul(cameraOffset)
      let cameraPos = new Vector3(
        humanoidRootPos.X + cameraDepth,
        24,
        humanoidRootPos.Z + cameraDepth
      )

      camera.CFrame = CFrame.lookAt(cameraPos, humanoidRootPos)
      camera.CFrame.ToWorldSpace(CFrame.lookAt(cameraPos, humanoidRootPos))
    }
  }
}

runService.RenderStepped.Connect(() => {
  if (!character) character = PlayerUtil.getCharacter() as Model
})
runService.BindToRenderStep(
  "IsometricCamera",
  Enum.RenderPriority.Camera.Value + 1,
  isometricCamera
)
