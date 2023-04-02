import React from "react";
import MyHeader from "../components/element/MyHeader";
import MyButton from "../components/element/MyButton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { emotionList } from "../util/emotion";
import EmotionItem from "../components/element/EmotionItem";

const NewPage = () => {
  const navigate = useNavigate();

  const handleEmotion = () => {
    console.log("dd");
  };
  return (
    <>
      <MyHeader
        leftChild={
          <MyButton
            text="< 뒤로가기"
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        centerText="새로운 일기쓰기"
      />
      <Box>
        <h2>오늘은 언제인가요?</h2>
        <input type="date" />
      </Box>
      <Box>
        <h2>오늘의 감정</h2>
        <EmotionBox>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.emotion_id}
              {...it}
              onClick={handleEmotion}
              // isSelected={it.emotion_id === emotion}
            />
          ))}
        </EmotionBox>
      </Box>
      <Box>
        <h2>오늘의 일기</h2>
        <textarea />
      </Box>
      <ButtonBox>
        <MyButton
          text="취소가기"
          onClick={() => {
            navigate(-1);
          }}
        />
        <MyButton
          text="작성완료"
          btnType="positive"
          onClick={() => {
            navigate(-1);
          }}
        />
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.section``;

const EmotionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;

`;
export default NewPage;
