import { pipe } from "./index"
import { map, some, filter, mapToArray } from "ts-object"

describe("pipe", () => {
  it("1 function", () => {
    const result = pipe({ a: 1, b: 2 }, map((x) => x * 2))
    expect(result).toEqual({ a: 2, b: 4 })
  })
  it("2 functions", () => {
    const obj = {
      a: 1,
      b: 2,
    }
    const fun = (x: typeof obj): boolean =>
      pipe(x, map((x) => x * 2), some((x) => x > 10))
    expect(fun(obj)).toBeFalsy()
  })
  it("3 functions", () => {
    const result = pipe(
      { a: 1, b: 2, c: 3 },
      map((x) => x * 5),
      filter((x) => x >= 10),
      mapToArray((_v, k) => k),
    )
    expect(result).toEqual(["b", "c"])
  })
})
