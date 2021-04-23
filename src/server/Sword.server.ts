import * as PlayerUtil from "shared/player_util"

const collectionService = game.GetService("CollectionService")
const swords = collectionService.GetTagged("Sword")

swords.forEach((i) => {
  let sword = i as Sword
  let activated = false
  let cooldown = false

  let swordSwingAnimation = new Instance("Animation")
  swordSwingAnimation.AnimationId = "rbxassetid://6717057230"

  sword.Activated.Connect(() => {
    print("act")
    if (!activated) {
      activated = true
      let animator = sword.Parent?.FindFirstChild("Humanoid")?.FindFirstChild("Animator") as Animator
      let swordSwingAnimationTrack = animator.LoadAnimation(swordSwingAnimation)
      swordSwingAnimationTrack.Looped = false
      swordSwingAnimationTrack.Play()
      swordSwingAnimationTrack.Stopped.Wait()
      activated = false
      cooldown = false
    }
  })

  function onHit(otherPart: Part) {
    let humanoid = otherPart.Parent?.FindFirstChild("Humanoid") as Humanoid
    print("touch")
    if (!humanoid || !activated || cooldown) 
      return
    print("damage")
    cooldown = true
    humanoid.TakeDamage(10)
  }
  sword.Blade.Tip.Touched.Connect((otherPart) => onHit(otherPart as Part))
  sword.Blade.Body.Touched.Connect((otherPart) => onHit(otherPart as Part))
})
