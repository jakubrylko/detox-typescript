type DetoxMatcher = string | RegExp

type DetoxScrollOptions = {
  visibility?: number
  direction?: Detox.Direction
  pixels?: number
  startPositionX?: number
  startPositionY?: number
}

type DetoxTarget = Detox.NativeElement | Detox.NativeElement[]

type DetoxWaitOptions = {
  visibility?: number
  timeout?: number
}
