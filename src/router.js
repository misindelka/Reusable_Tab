import React from 'react';
import Surveys from './categories/Surveys/index.js';
import Contacts from './categories/Contacts/index.js';

import styled from 'styled-components';

const Placeholder = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	margin-top: 50px;
	margin-left: 150px;
	background: #232733;
	color: white;
	align-items: center;
	justify-content: center;
`;

const ComponentPlaceholder = ({ label }) => (
	<Placeholder>
		<h1>{`ready for ${label} component and functionality`}</h1>
	</Placeholder>
);

export const routes = [
	{
		path: '/Dashboard',
		component: () => <ComponentPlaceholder label="Dashboard" />,
		routeName: 'Dashboard',
	},
	{
		path: '/Campagins',
		component: () => <ComponentPlaceholder label="Campaings" />,
		routeName: 'Campaings',
	},
	{
		path: '/WorkFlows',
		component: () => <ComponentPlaceholder label="Workflow" />,
		routeName: 'Workflow',
	},
	{
		path: '/Templates',
		component: () => <ComponentPlaceholder label="Templates" />,
		routeName: 'Templates',
	},
	{
		path: '/Stats',
		component: () => <ComponentPlaceholder label="Stats" />,
		routeName: 'Stats',
	},
	{
		path: '/Contacts',
		component: Contacts,
		routeName: 'Contacts',
	},
	{
		path: '/Surveys',
		routeName: 'Surveys',
		component: Surveys,
	},
];
