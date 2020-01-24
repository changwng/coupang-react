import React, { useState, useEffect } from "react";

const Selector = ({ setOption, selectOption, optionValue}) => {
  const [id, setId] = useState(0);
  const [options, setOptions] = useState([]);
  const [optioned, setOptioned] = useState([]);

  const handleChange = event => {
    const option = {
      id: id,
      value: event.target.value,
      quantityValue: 1
    };
    setOption([...selectOption, option]);
    setId(id + 1);
  };
  
  

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
      {optioned.map((options, idx) => (
        <option key={idx} value={options} style={{ color: "#000" }}>
          {options}
        </option>
      ))}
      <option value="검은색" style={{ color: "#000" }}>
        검은색
      </option>
      <option value="하얀색" style={{ color: "#000" }}>
        하얀색
      </option>
    </select>
  );
};

export default Selector;
