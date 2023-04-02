import React from "react";
import styled from "styled-components";

function EmotionItem({ emotion_descript, emotion_id, emotion_img }) {
  return (
    <EmotionBox>
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </EmotionBox>
  );
}
const EmotionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  background-color: #ececec;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  img {
    width: 70px;
    /* color props받아서 사용 */
  }
`;
const EmotionItem_on_1 = styled(EmotionBox)`
  background-color: #64c964;
  color: white;
`;
const EmotionItem_on_2 = styled(EmotionBox)`
  background-color: #9dd772;
  color: white;
`;
const EmotionItem_on_3 = styled(EmotionBox)`
  background-color: #fdce17;
  color: white;
`;
const EmotionItem_on_4 = styled(EmotionBox)`
  background-color: #fd8446;
  color: white;
`;
const EmotionItem_on_5 = styled(EmotionBox)`
  background-color: #fd565f;
  color: white;
`;
export default EmotionItem;
