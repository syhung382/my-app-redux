import "./App.css";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";

function App() {
  // @ts-ignore
  const { count } = useSelector((state) => state.counter);

  return (
    <>
      <h2>the count form App is: {count}</h2>
      <Counter></Counter>
    </>
  );
}

export default App;
