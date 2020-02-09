import React from "react";
import styled from "styled-components";
import { useApplicationContext } from "../cartProvider/cartProvider";

const Input = styled.input``;

const CheckBox = ({checked}) => {
  const { customerOrder, handleChangeCart } = useApplicationContext();
  const handleChecked = e => {
    const checkedBoxId = e.target.parentNode.parentNode.id;
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
      if (element.id === parseInt(checkedBoxId)) {
        const repairObject = {
          checked: !checked,
          id,
          itemid,
          price,
          itemName,
          value,
          quantityValue
        };
        return repairObject;
      } else {
        return element;
      }
    });

    handleChangeCart(modify);
  };

  return <Input type="checkbox" checked={checked} onChange={handleChecked}/>;
};

export default CheckBox;
