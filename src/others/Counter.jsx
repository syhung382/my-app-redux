import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux-toolkit/counterSlice";

const Counter = () => {
  // @ts-ignore
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  // Write new function name handleDecrement
  const handleDecrement = () => {
    dispatch(decrement());
  };
  // handleIncrementByValue
  const handleIncrementByValue = () => {
    dispatch(incrementByValue(10));
  };

  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-200 cursor-pointer"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border border-gray-200 cursor-pointer"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-block p-2 border border-gray-200 cursor-pointer"
          onClick={handleIncrementByValue}
        >
          Increase by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
