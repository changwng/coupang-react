import React, { useState, useEffect } from "react";
import Container from "../container";
import { Img, Li, Button } from "../input";
import { Text } from "../text";

const Selector = ({ handleChange }) => {
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
