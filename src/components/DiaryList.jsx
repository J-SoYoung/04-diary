import React from "react";
import ControlMemu from "./element/ControlMemu";
import MyButton from "./element/MyButton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DiaryItem from "./DiaryItem";

function DiaryList({ diaryList }) {
  console.log(diaryList);
  const navigate = useNavigate();
  return (
    <>
      <ControlBar>
        <div>
          <ControlMemu />
          <ControlMemu />
        </div>
        <MyButton
          text="새 일기쓰기"
          btnType="positive"
          onClick={() => {
            navigate("/new");
          }}
        />
      </ControlBar>
      <div>
        {diaryList.map((diary) => {
          return <DiaryItem diary={diary} />;
        })}
      </div>
    </>
  );
}
const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px ;
  box-sizing: border-box;
  div {
    flex: 1 
    background-color: red;
    select {
      margin-right: 10px;
    }
  }
  button{
    flex:1
  }
`;

export default DiaryList;
