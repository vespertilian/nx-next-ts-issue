import { helloWorld } from "@nx-next-ts-issue/my-new-lib";

describe('foo', () => {
  it('return hello world', () => {
    expect(helloWorld()).toBe('Hello world!')
  })
})
