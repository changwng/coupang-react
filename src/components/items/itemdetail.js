import React, { useState, useEffect } from "react";
import Container from "../container";
import { Img, Button } from "../input";
import { Text } from "../text";
import OptionList from "./optionList";
import Selector from "./selector";

const ItemDetail = ({
  match: {
    params: { id }
  }
}) => {
  const [item, setItem] = useState([]);
  const [selectOption, setOption] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:8000/item/${id}`);
      if (response.ok) {
        setItem(await response.json());
      }
    };
    fetchItems();
  }, [id]);

  const handleChengeICounter = id => {
    setOption(
      selectOption.map(option =>
        option.id === id
          ? { ...option, quantityValue:(option.quantityValue+1) }
          : option
      )
    );
  };

  const handleChengeDCounter = id => {
    setOption(
      selectOption.map(option =>{
        if(option.id === id && option.quantityValue > 1){
          return(
            { ...option, quantityValue:(option.quantityValue-1) }
          )
        }else{
          return(option)
        }}
      )
    );
  };

  const handleAddCart = () => {
    console.log(selectOption)
  }

  return (
    <Container dispaly="df" style={{ flexDirection: "row" }}>
      <Container
        display="dif"
        style={{ flexDirection: "row", verticalAlign: "top" }}
      >
        <Container>
          <Img wsize="smallImg" hsize="smallImg" background={item.image}></Img>
        </Container>
        <Img wsize="bigImg" hsize="bigImg" background={item.image}></Img>
      </Container>
      <Container
        display="dif"
        hsize="full"
        style={{
          flexDirection: "column",
          padding: "10px 30px",
          margin: "5px 30px",
          width: "380px"
        }}
      >
        <Text size="huge" bold>
          {item.itemName}
        </Text>
        <Text
          size="large"
          color="review"
          style={{ borderBottom: "1px solid #D5D5D5", padding: "15px 0" }}
        >
          상품리뷰 ({item.reviewCounter})
        </Text>
        <Text
          size="huge"
          color="realPrice"
          bold
          style={{
            borderBottom: "1px solid #D5D5D5",
            padding: "15px 0",
            marginBottom: "15px"
          }}
        >
          {item.price}
        </Text>
        <Text size="large" color="review" style={{ marginBottom: "15px" }}>
          무료배송 오늘내 도착
        </Text>
        <Selector setOption={setOption} selectOption={selectOption} item={item}/>
        <OptionList
          selectOption={selectOption}
          handleChengeICounter={handleChengeICounter}
          handleChengeDCounter={handleChengeDCounter}
        />
        <Container
          display="df"
          wsize="full"
          style={{ justifyContent: "center", marginTop: "16px" }}
        >
          <Button style={{ margin: "0" }}>구매</Button>
          <Button onClick={handleAddCart}>장바구니</Button>
        </Container>
      </Container>
    </Container>
  );
};

export default ItemDetail;
