type DetoxScrollOptions = {
  visibility?: number
  direction?: Detox.Direction
  pixels?: number
  startPositionX?: number
  startPositionY?: number
}

type DetoxWaitOptions = {
  visibility?: number
  timeout?: number
}

type Matcher = string | RegExp

type Target = Detox.NativeElement | Detox.NativeElement[]
