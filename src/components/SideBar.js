import React from 'react';
import styled from 'styled-components';
import { routes } from '../router';
import { LinkTo } from '../styles/Components';

const SideWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	background: ${(props) => props.theme.secondaryBarColor};
`;

const SideBar = () => {
	return (
		<SideWrapper>
			{routes.map((route) => (
				<LinkTo to={{ pathname: route.path }} key={route.path}>
					<h4>{route.routeName}</h4>
				</LinkTo>
			))}
		</SideWrapper>
	);
};

export default SideBar;
