import React, { useState } from "react";

const Selector = ({ setOption, selectOption, item:{option}}) => {
  const [id, setId] = useState(0);
  const handleChange = event => {
    const option = {
      id: id,
      value: event.target.value,
      quantityValue: 1
    };
    setOption([...selectOption, option]);
    setId(id + 1);
  };
  let optionArr = option

  return (
    <select
      value={this}
      onChange={handleChange}
      name="selectBox"
      aria-label="옵션선택"
      style={{
        border: "1px solid #eee",
        height: "50px",
        color: "#ccc",
        marginBottom: "15px",
        padding: "16px"
      }}
    >
      <option selected disabled style={{ color: "#ccc" }}>
        ---옵션선택---
      </option>
      {/* <option value="검은색" style={{ color: "#000" }}>
        검은색
      </option>
      <option value="하얀색" style={{ color: "#000" }}>
        하얀색
      </option> */}
    </select>
  );
};

export default Selector;
