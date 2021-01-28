import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   background: #232733;
   
 }
`;

export const RowContainer = styled.div`
	display: flex;
	padding: ${(props) => props.theme.primaryPadding};
`;

export const ColumnWrapper = styled.div`
	display: flex;
	padding: ${(props) => props.theme.primaryPadding};
`;

export const ColumnContainer = styled.div`
	display: flex;
	padding: ${(props) => props.theme.primaryPadding};

	color: ${(props) => props.theme.secondaryTextColor};
`;

export const SelectBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 15px;
	width: 15px;
	border: 1px dashed #512da8;
	margin: ${(props) => props.theme.primaryPadding};
	border-radius: 2px;
`;

export const RowWrapper = styled.div`
	border: 1px dashed #512da8;
	display: flex;
	border-radius: 2px;
	align-items: center;
`;

export const LinkTo = styled(Link)`
	padding: ${(props) => props.theme.primaryPadding};
	text-decoration: none;
	color: ${(props) => props.theme.primaryTextColor};
`;
