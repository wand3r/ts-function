export type Arity2<A, B, C> = (a: A, b: B) => C
export type Curried2<A, B, C> = {
  (a: A, b: B): C
  (a: A): (b: B) => C
}
export const curry2Last: <A, B, C>(fn: Arity2<A, B, C>) => Curried2<A, B, C> = (
  fn,
) => {
  const curried = (...args: any[]) => {
    switch (args.length) {
      case 2: {
        const [a, b] = args
        return fn(a, b)
      }
      case 1: {
        const [a] = args
        return (b: any) => fn(a, b)
      }
      default:
        throw new Error("Wrong arity")
    }
  }
  return curried as Curried2<any, any, any>
}

export type Arity3<A, B, C, D> = (a: A, b: B, c: C) => D
export type Curried3<A, B, C, D> = {
  (a: A, b: B, c: C): D
  (a: A, b: B): (c: C) => D
}
export const curry3Last: <A, B, C, D>(
  fn: Arity3<A, B, C, D>,
) => Curried3<A, B, C, D> = (fn) => {
  const curried = (...args: any[]) => {
    switch (args.length) {
      case 3: {
        const [a, b, c] = args
        return fn(a, b, c)
      }
      case 2: {
        const [a, b] = args
        return (c: any) => fn(a, b, c)
      }
      default:
        throw new Error("Wrong arity")
    }
  }
  return curried as Curried3<any, any, any, any>
}
