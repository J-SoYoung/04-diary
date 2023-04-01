import React from "react";

function ControlMemu(props) {
  return (
    <>
      <select>
        <option value={"lastest"}>최신순</option>
        <option value={"oldest"}>오래된순</option>
      </select>
    </>
  );
}

export default ControlMemu;
