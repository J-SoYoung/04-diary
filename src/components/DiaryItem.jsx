import React from "react";
import styled from "styled-components";
import MyButton from "./element/MyButton";
import { useNavigate } from "react-router-dom";

function DiaryItem({ diary }) {
  const navigate = useNavigate();
  const day = new Date(diary.date).toISOString().split("T")[0];
  const time = new Date(diary.date).toISOString().split("T")[1].split(".")[0];

  return (
    <DiaryItemBox>
      <DiaryImg src={`/img/emotion${diary.emotion}.png`} />
      <DiaryContent>
        <DiaryDate>
          <span>
            {day} / {time}
          </span>
        </DiaryDate>
        <DiaryText>{diary.content}</DiaryText>
      </DiaryContent>
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
const DiaryDate = styled.div`
  font-size: 12px;
  color: gray;
`;
const DiaryContent = styled.div`
  border: 1px solid red;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;
const DiaryText = styled.div``;
export default DiaryItem;
