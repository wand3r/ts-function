import { curry2Last, curry3Last } from "./index"

describe("curry", () => {
  it("2 arity", () => {
    const fn = curry2Last((a: number, b: number) => a + b)
    expect(fn(1, 2)).toBe(3)
    expect(fn(1)(2)).toBe(3)
  })
  it("3 arity", () => {
    const fn = curry3Last((a: number, b: number, c: number) => a + b + c)
    expect(fn(1, 2, 3)).toBe(6)
    expect(fn(1, 2)(3)).toBe(6)
  })
})
