import logo from './logo.svg';
import './App.css';

import Hello from "./component/Hello";
import Hi from "./component/Hi";
import Title from "./component/Title";
import Count from "./component/Count";
import Clock from "./component/Clock";
import React, { useState } from "react";
import {Form} from "./component/Form";
import First from "./component/First";
import Lotto from "./component/Lotto.js"
import CountEffect from "./component/hooks/useEffect/CountEffect";
import { ThemeContext } from './component/themeTest/ThemeContext';
import Container from './component/themeTest/Container';
import {themes} from "./component/themeTest/Themes";
import MemoContainer from './component/MemoContainer';
import CallbackContainer from './component/CallbackContainer';



function App() {
  const [isDark, setIsDark] = useState(true);
  const changeMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Hello>

      </header>
    </div>
  );
}
export default App;