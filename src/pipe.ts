type Pipe = {
  <T1, R>(arg: T1, fn1: (x: T1) => R): R
  <T1, T2, R>(arg: T1, fn1: (x: T1) => T2, fn2: (x: T2) => R): R
  <T1, T2, T3, R>(
    arg: T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => R,
  ): R
  <T1, T2, T3, T4, R>(
    arg: T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => R,
  ): R
  <T1, T2, T3, T4, T5, R>(
    arg: T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => R,
  ): R
  <T1, T2, T3, T4, T5, T6, R>(
    arg: T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => R,
  ): R
  <T1, T2, T3, T4, T5, T6, T7, R>(
    arg: T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => R,
  ): R
  <T1, T2, T3, T4, T5, T6, T7, T8, R>(
    arg: T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8,
    fn8: (x: T8) => R,
  ): R
  <T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(
    arg: T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8,
    fn8: (x: T8) => T9,
    fn9: (x: T9) => R,
  ): R
}
export const pipe = ((arg: any, ...fns: ((x: any) => any)[]) =>
  fns.reduce((acc, fn) => fn(acc), arg)) as Pipe
