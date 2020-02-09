import React from "react";
import styled from "styled-components";
import { useApplicationContext } from "../cartProvider/cartProvider";

const Select = styled.select`
  border: 1px solid #eee;
  width: 50px;
  color: #000;
  margin: 0 35px 15px 0;
  padding: 5px;
`;

const TableSelect = ({ item }) => {
    const { customerOrder, handleChangeCart } = useApplicationContext();

  const handleChangeQuantityValue = e => {
    const changeId =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;

    const modify = customerOrder.map(element => {
      const {
        checked,
        id,
        price,
        itemName,
        itemid,
        value,
        quantityValue
      } = element;
      if (element.id === parseInt(changeId)) {
        const repairObject = {
          checked,
          id,
          itemid,
          price,
          itemName,
          value,
          quantityValue: e.target.value
        };
        return repairObject;
      } else {
        return element;
      }
    });

    handleChangeCart(modify);
  };
  return (
    <Select
      defaultValue={`${item.quantityValue}`}
      onChange={handleChangeQuantityValue}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option>10+</option>
    </Select>
  );
};

export default React.memo(TableSelect);
