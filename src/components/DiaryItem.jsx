import React from "react";
import styled from "styled-components";
import MyButton from "./element/MyButton";
import { useNavigate } from "react-router-dom";

function DiaryItem({ diary }) {
  const navigate = useNavigate();
  console.log(diary);
  return (
    <DiaryItemBox>
      <DiaryImg src={`/img/emotion${diary.emotion}.png`} />
      <DiaryContent>{diary.content}</DiaryContent>
      <MyButton
        text="수정하기"
        onClick={() => {
          navigate(`/edit/${diary.id}`);
        }}
      />
    </DiaryItemBox>
  );
}

const DiaryItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const DiaryImg = styled.img`
  width: 50px;
`;
const DiaryContent = styled.div`
  border: 1px solid red;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;
export default DiaryItem;
