import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { routes } from './router';
import { GlobalStyle } from './styles/Components';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

function Main() {
	return (
		<Wrapper>
			<Router>
				<TopBar />
				<SideBar />
				<Switch>
					{routes.map((i) => (
						<Route key={i.path} path={i.path} component={i.component} />
					))}
				</Switch>

				<GlobalStyle />
			</Router>
		</Wrapper>
	);
}

export default Main;
