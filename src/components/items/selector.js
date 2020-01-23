import React, { useState, useEffect } from "react";

const Selector = ({ setOptions }) => {
  const [Arr, setArr] = useState([]);
  const [id, setId] = useState(0)
  const handleChange = event => {
    const option = { value: event.target.value, id:id };
    setArr([...Arr, option])
    setId(id+1)
  };

  useEffect(()=>{
    setOptions(Arr)
  }, [Arr, setOptions])


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
      <option value="옵션선택" style={{ color: "#000" }}>
        옵션선택
      </option>
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
