import React, { useState } from "react";
import "./App.css";
import AppRoute from "./AppRoute";

export const DiaryStateContext = React.createContext();
const dummy = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기1",
    date: 1679658758353,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기2",
    date: 1679658758356,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기3",
    date: 1679658758358,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기4",
    date: 1680432365124,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기5",
    date: 1680432365128,
  },
  {
    id: 6,
    emotion: 1,
    content: "오늘의 일기6",
    date: 1682899200000,
  },
  {
    id: 7,
    emotion: 3,
    content: "오늘의 일기7",
    date: 1682899200004,
  },
];

function App() {
  const [data, setData] = useState(dummy);
  return (
    <div className="App">
      <DiaryStateContext.Provider value={data}>
        <AppRoute />
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;
