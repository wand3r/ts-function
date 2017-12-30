Simple utility methods for composing functions in TypeScript without loosing types.

## Installation

```
npm i ts-function
```

## pipe

Execute up to 9 functions with arity 1 in chain, starting with value set as first argument, which is then passed as input to first function. As result we get output from last function. Works similar to `|>` operator from F#

```typescript
import { pipe } from "ts-function"

const obj = {
  a: 1,
  b: 2,
}
const result: typeof obj = pipe(obj, map((x) => x * 2))
const result: boolean = pipe(obj, map((x) => x * 2), some((x) => x > 10))
const result: string[] = pipe(
  obj,
  map((x) => x * 5),
  filter((x) => x >= 10),
  mapToArray((_v, k) => k),
)
```

## compose

Compose up to 9 functions with arity 1 into another function, passing output from previous function as input for next function. Functions are executed from left to right (Typescript can't work with other direction). For compose to work with generic functions we need to specify output function signature or explicity set argument type in first function.

```typescript
import { compose } from "ts-function"

type AB = { a: number; b: number }
const fun: (x: AB) => AB = compose(map((x) => x * 2))
const fun: (x: AB) => boolean = compose(map((x) => x * 2), some((x) => x > 10))
const fun: (x: Obj) => string[] = compose(
  map((v) => v * 5),
  filter((v) => v >= 10),
  mapToArray((_v, k) => k),
)
```

It looks like Typescript can't correctly choose between overloads where first function have different arity:

```typescript
type Compose = {
  <T1, R>(fn1: (x: T1) => R): (x: T1) => R
  <T11, T12, R>(fn1: (x: T11, y: T12) => R): (x: T11, y: T12) => R
  ...
}
```

so for now library only provides first option (where first function has one argument), as it is most common use case. Simplest solution will be to add another functions like `compose2`, `compose3` and so on to handle passing first function with two, three and more arguments.
