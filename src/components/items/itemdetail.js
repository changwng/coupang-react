import React, { useState, useEffect } from 'react';
import Container from '../container';
import { Img, Li } from '../input';
import { Text } from '../text';

const ItemDetail = ({ match }) => {
	const [item, setItem] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const response = await fetch(
				`http://localhost:8000/item/${match.params.id}`
			);
			if (response.ok) {
				setItem(await response.json());
			}
		};
		fetchItems();
	}, []);

	return (
		<Container dispaly="df" style={{ flexDirection: 'row' }}>
			<Container
				display="dif"
				style={{ flexDirection: 'row', verticalAlign: 'top' }}
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
					flexDirection: 'column',
					padding: '10px 30px',
					margin: '5px 30px',
					width: '380px'
				}}
			>
				<Text size="huge" bold>
					{item.itemName}
				</Text>
				<Text
					size="large"
					color="review"
					style={{ borderBottom: '1px solid #D5D5D5', padding: '15px 0' }}
				>
					상품리뷰 (23)
				</Text>
				<Text
					size="huge"
					color="realPrice"
					bold
					style={{
						borderBottom: '1px solid #D5D5D5',
						padding: '15px 0',
						marginBottom: '15px'
					}}
				>
					{item.price}
				</Text>
				<Text size="large" color="review" style={{ marginBottom: '15px' }}>
					무료배송 오늘내 도착
				</Text>
				<select onSelect={console.log(this.value)}
					aria-label="옵션선택"
					style={{
						border: '1px solid #eee',
						height: '50px',
						color: '#ccc',
						marginBottom: '15px',
						padding: '16px'
					}}
				>
					<option value="옵션선택" style={{ color: '#000' }}>
						옵션선택
					</option>
					<option value="검은색" style={{ color: '#000' }}>
						검은색
					</option>
					<option value="하얀색" style={{ color: '#000' }}>
						하얀색
					</option>
				</select>
				<ul
					style={{ border: '1px solid #eee', height: '100px', padding: '16px' }}
				>
					<Li>옵션1</Li>
				</ul>
			</Container>
		</Container>
	);
};

export default ItemDetail;
