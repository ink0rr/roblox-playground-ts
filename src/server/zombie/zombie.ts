export class ZombieModule {
}

function init(zombie: Zombie) {
    let zombieRootPart = zombie.HumanoidRootPart
    let zombieHumanoid = zombie.Humanoid
    zombieHumanoid.WalkSpeed = 20

    function createDot(position: Vector3) {
        let dot = new Instance("Part")
        dot.Position = position
        dot.Color = new Color3(1, 1, 1)
        dot.Shape = Enum.PartType.Ball
        dot.Anchored = true
        dot.Material = Enum.Material.Neon
        dot.CanCollide = false
        dot.Size = new Vector3(1, 1, 1)
        dot.Parent = game.Workspace
    }

    function findPath(targetHead: Part) {
        let path = pathFindingService.CreatePath()
        path.ComputeAsync(zombieRootPart.Position, targetHead.Position)
        if (path.Status === Enum.PathStatus.Success) {
            let pathWaypoints = path.GetWaypoints()
            pathWaypoints.forEach((waypoint) => {
                    if (targetHead.Position.sub(pathWaypoints[pathWaypoints.size() - 1].Position).Magnitude > 20) {
                        print("Target moved")
                        findPath(targetHead)
                        return
                    }
                    if (waypoint.Action === Enum.PathWaypointAction.Jump) {
                        zombieHumanoid.Jump = true
                        print("Jumped")
                    }
                    createDot(waypoint.Position)
                    zombieHumanoid.MoveTo(waypoint.Position)
                    zombieHumanoid.MoveToFinished.Wait()
                    print("Moving")

                    while (checkSight(targetHead)) {
                        zombieHumanoid.MoveTo(targetHead.Position)
                        zombieHumanoid.MoveToFinished.Wait()
                        wait(0.1)
                    }
                }
            )
        }
    }

    function checkSight(targetHead: Part) {
        let ray = game.Workspace.Raycast(zombieRootPart.Position, targetHead.Position.sub(zombieRootPart.Position).Unit.mul(40))
        if (ray) {
            if (ray.Instance.IsDescendantOf(targetHead.Parent as Instance) && math.abs(ray.Position.Y - zombieRootPart.Position.Y) < 3) {
                print("Can see")
                return true
            }
        }
        return false
    }

    function findTarget(): unknown {
        let dist = 200
        let target
        let potentialTargets: Part[] = []
        let seeTargets: Part[] = []

        game.Workspace.GetChildren().forEach((v) => {
            let humanoid = v.FindFirstChild("Humanoid") as Humanoid
            let head = v.FindFirstChild("Head") as Part
            if (humanoid && head && !collectionService.HasTag(humanoid.Parent as Instance, "Zombie") && humanoid.Parent?.Name !== "Dummy") {
                if (head.Position.sub(zombieRootPart.Position).Magnitude < dist && humanoid.Health > 0) {
                    potentialTargets.push(head)
                }
            }
        })
        if (potentialTargets.size()) {
            potentialTargets.forEach((element) => {
                if (checkSight(element)) {
                    seeTargets.push(element)
                } else if (!seeTargets.size() && zombieRootPart.Position.sub(element.Position).Magnitude < dist) {
                    target = element
                    dist = zombieRootPart.Position.sub(element.Position).Magnitude
                }
            })
        }
        if (seeTargets.size()) {
            dist = 200
            seeTargets.forEach((element) => {
                if (zombieRootPart.Position.sub(element.Position).Magnitude < dist) {
                    target = element
                }
            })
        }
        return target
    }

    function main() {
        let targetHead = findTarget() as Part
        if (targetHead) {
            findPath(targetHead)
        }
    }

    while (wait(0.1)) {
        main()
    }
}

const pathFindingService = game.GetService("PathfindingService")
const collectionService = game.GetService("CollectionService")
const zombies = collectionService.GetTagged("Zombie")
zombies.forEach((i) => init(i as Zombie))
collectionService.GetInstanceAddedSignal("Zombie").Connect((i) => init(i as Zombie))
