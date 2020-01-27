import React from 'react';
import Container from '../container';
import { Button, Input, Li, Logo } from '../input';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Container
			wsize="header"
			hsize="header"
			display="df"
			style={{ alignItems: 'center' }}
		>
			<Container
				wsize="button"
				hsize="header"
				display="df"
				style={{
					background: '#4285F4',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column'
				}}
			>
				<div
					style={{
						width: '27px',
						height: '18px',
						background: `url('../img/menu.png')`
					}}
				></div>
				<span style={{ fontSize: '11px', color: '#fff', marginTop: '5px' }}>
					카테고리
				</span>
			</Container>
			<Link to="/">
				<Logo></Logo>
			</Link>
			<div
				style={{
					marginLeft: '50px',
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				<form>
					<Input></Input>
					<Button topButton>검색</Button>
				</form>
				<ul
					style={{
						listStyle: 'none',
						display: 'flex',
						padding: '0',
						margin: '10px 0 0 0'
					}}
				>
					<Li>식품</Li>
					<Li>가전</Li>
					<Li>미용</Li>
				</ul>
			</div>
			<div style={{ display: 'flex', marginLeft: '43px' }}>
				<span
					style={{
						width: '28px',
						height: '35px',
						background: `url('../img/icon.png')`,
						margin: '2px 20px 0 0',
						backgroundPosition: '-112px -36px'
					}}
				></span>
				<span
					style={{
						width: '40px',
						height: '35px',
						background: `url('../img/icon.png')`,
						marginRight: '20px',
						backgroundPosition: '-112px 0px',
						textAlign: 'right',
						letterSpacing: '9px',
						color: '#fff',
						fontWeight: 'bold',
						fontSize: '15px',
						lineHeight: '19px'
					}}
				>
					1
				</span>
			</div>
		</Container>
	);
};

export default Header;
