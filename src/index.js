import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import { ThemeProvider } from 'styled-components';
import * as theme from './styles/Theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
