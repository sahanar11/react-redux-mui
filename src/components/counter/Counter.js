import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Counter.module.css";
import {
  CounterActions,
  CounterSelector,
} from "../../redux/reducers/counter/counterSlice";

import CounterThunk from "../../redux/reducers/counter/counterThunk";

export function Counter() {
  const count = useSelector(CounterSelector.count);
  const status = useSelector(CounterSelector.status);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      {status === "loading" && "loading...!!"}
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(CounterActions.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(CounterActions.increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(CounterActions.incrementByAmount(incrementValue))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(CounterThunk.incrementAsync(incrementValue))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
