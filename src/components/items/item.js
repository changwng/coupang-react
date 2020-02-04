import React from 'react';
import Container from '../container';
import { Img } from '../input';
import { Text, Ctext } from '../text';

const Item = ({ image, underPrice, price, itemName, id, reviewCounter }) => {
	const Price = price;
	const quantity = underPrice;
	const newPrice = Price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	const newUnderPrice = underPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	return (
		<Container
			item
			wsize="img"
			hsize="item"
			style={{
				margin: '100px 0 0 0',
				padding: '15px',
				transition: '.2s',
				cursor: 'pointer'
			}}
		>
			<Img
				wsize="img"
				hsize="img"
				background={image}
			></Img>
			<Container display="df" style={{flexDirection:"column"}}>
			<Text size="huge" bold style={{ margin: '10px 0 5px 0',overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis", width:"200px"}}>
				{itemName}
			</Text>
			<Ctext size="mini" color="underPrice" style={{ margin: '0' }}>
				{newUnderPrice} 원
			</Ctext>
			<Text size="medium" color="realPrice" bold style={{ margin: '0' }}>
				{newPrice} 원
			</Text>
			<Text size="tiny" color="review" style={{ margin: '5px 0 0' }}>
				상품리뷰 ({reviewCounter})
			</Text>
			</Container>
		</Container>
	);
};

export default Item;
