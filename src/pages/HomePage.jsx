import React, { useContext, useState } from "react";
import MyHeader from "../components/element/MyHeader";
import MyButton from "../components/element/MyButton";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";

const HomePage = () => {
  const diaryList = useContext(DiaryStateContext);
  const [curDate, setcurDate] = useState(new Date());
  const centerText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const decreaseMonth = () => {
    setcurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1),
      curDate.getDate()
    );
    console.log("감소");
  };
  const increaseMonth = () => {
    setcurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1),
      curDate.getDate()
    );
    console.log("증가");
  };

  return (
    <div>
      <MyHeader
        leftChild={<MyButton text="<" onClick={decreaseMonth} />}
        rightChild={<MyButton text=">" onClick={increaseMonth} />}
        centerText={centerText}
      />
      <DiaryList diaryList={diaryList} />
    </div>
  );
};

export default HomePage;
