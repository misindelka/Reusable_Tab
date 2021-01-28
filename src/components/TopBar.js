import React from 'react';
import styled from 'styled-components';
import { LinkTo } from '../styles/Components';

const TopWrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	height: ${(props) => props.theme.primaryRowHeight};
	background: ${(props) => props.theme.primaryBarColor};
`;

const TopBar = () => {
	return (
		<TopWrapper>
			<LinkTo to="/home">HOME</LinkTo>
			<LinkTo to="/store">CLEVER STORE</LinkTo>
			<LinkTo to="/other">OTHER</LinkTo>
		</TopWrapper>
	);
};

export default TopBar;
