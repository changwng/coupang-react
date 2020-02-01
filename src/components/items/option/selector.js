import React, { useState } from "react";

const Selector = ({
  itemid,
  setOption,
  selectOption,
  optionValue,
  handleChengeICounter,
  itemName,
  price
}) => {
  const [id, setId] = useState(0);

  const handleChange = event => {
    const option = {
      price:price,
      itemName:itemName,
      itemid:itemid,
      id: id,
      value: event.target.value,
      quantityValue: 1
    };
    const searchArr = selectOption.filter(itemValue => {
      return itemValue.value === event.target.value;
    });
    if (searchArr[0] !== undefined) {
      handleChengeICounter(searchArr[0].id);
    } else {
      setOption([...selectOption, option]);
    }
    setId(id + 1);
  };

  return (
    <select
      defaultValue="default"
      onChange={handleChange}
      name="selectBox"
      aria-label="옵션선택"
      style={{
        border: "1px solid #eee",
        width: "100%",
        height: "50px",
        color: "#ccc",
        marginBottom: "15px",
        padding: "16px"
      }}
    >
      <option value="default" disabled style={{ color: "#ccc" }}>
        ---옵션선택---
      </option>
      {(optionValue || []).map((options, idx) => (
        <option key={idx} value={options} style={{ color: "#000" }}>
          {options}
        </option>
      ))}
    </select>
  );
};

export default React.memo(Selector);
