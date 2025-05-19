import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import { useEffect } from "react";
import Counter from "./components/Counter";

function App() {
  // @ts-ignore
  const globalOptions = useSelector((state) => state.global);
  console.log(globalOptions);

  const dispatch = useDispatch();

  const handleToggleDarkmode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };

  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
  }, []);

  // console.log("darkMode", darkMode);

  return (
    <>
      <Card></Card>
      <Counter></Counter>
      <button onClick={handleToggleDarkmode}>Toggle dark mode</button>
    </>
  );
}

export default App;
``;
