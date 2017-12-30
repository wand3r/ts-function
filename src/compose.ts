type Compose = {
  <T1, R>(fn1: (x: T1) => R): (x: T1) => R
  <T1, T2, R>(fn1: (x: T1) => T2, fn2: (x: T2) => R): (x: T1) => R
  <T1, T2, T3, R>(fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => R): (
    x: T1,
  ) => R
  <T1, T2, T3, T4, R>(
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => R,
  ): (x: T1) => R
  <T1, T2, T3, T4, T5, R>(
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => R,
  ): (x: T1) => R
  <T1, T2, T3, T4, T5, T6, R>(
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => R,
  ): (x: T1) => R
  <T1, T2, T3, T4, T5, T6, T7, R>(
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => R,
  ): (x: T1) => R
  <T1, T2, T3, T4, T5, T6, T7, T8, R>(
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8,
    fn8: (x: T8) => R,
  ): (x: T1) => R
  <T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8,
    fn8: (x: T8) => T9,
    fn9: (x: T9) => R,
  ): (x: T1) => R
}
export const compose = ((...fns: ((x: any) => any)[]) => (x: any) =>
  fns.reduce((acc, fn) => fn(acc), x)) as Compose

export type Compose2 = {
  <T11, T12, R>(fn1: (x: T12, y: T12) => R): (x: T12, y: T12) => R
}
export declare const compose2: Compose2
