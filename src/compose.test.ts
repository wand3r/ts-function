import { compose } from "./index"
import { map, filter, mapToArray, some } from "ts-object"

describe("compose", () => {
  it("1 function", () => {
    const obj = { a: 1, b: 2 }
    const fun: (x: typeof obj) => typeof obj = compose(map((x) => x * 2))
    expect(fun(obj)).toEqual({ a: 2, b: 4 })
  })
  it("2 functions", () => {
    const obj = { a: 1, b: 2 }
    const fun: (x: typeof obj) => boolean = compose(
      map((x) => x * 2),
      some((x) => x > 10),
    )
    expect(fun(obj)).toBeFalsy()
  })
  it("3 functions", () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    }
    const fun = compose(
      map<typeof obj, number>((v) => v * 5),
      filter((v) => v >= 10),
      mapToArray((_v, k) => k),
    )
    expect(fun(obj)).toEqual(["b", "c"])
  })
})
