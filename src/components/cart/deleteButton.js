import React from "react";
import { useApplicationContext } from "../cartProvider/cartProvider";
import { Button } from "../input";

const DeleteButton = () => {
  const { customerOrder, handleChangeCart } = useApplicationContext();
  const deleteCartList = e => {
    const target =
      e.target.parentNode.parentNode.parentNode.parentNode.id;
      console.log(target)
    const clearOptionList = customerOrder.filter(element => {
      return element.id !== parseInt(target);
    });
    handleChangeCart(clearOptionList);
  };

  return (
    <Button
      backPosition={"-346px -327px"}
      xBox
      onClick={deleteCartList}
    ></Button>
  );
};

export default React.memo(DeleteButton);
