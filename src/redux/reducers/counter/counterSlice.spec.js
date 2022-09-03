import { CounterReducer, CounterActions } from "./counterSlice";

describe("counter reducer", () => {
  const initialState = {
    value: 3,
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(CounterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    const actual = CounterReducer(initialState, CounterActions.increment());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = CounterReducer(initialState, CounterActions.decrement());
    expect(actual.value).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = CounterReducer(
      initialState,
      CounterActions.incrementByAmount(2)
    );
    expect(actual.value).toEqual(5);
  });
});
