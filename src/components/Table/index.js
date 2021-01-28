import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Row from './Row';
import { IoCloseOutline } from 'react-icons/io5';
import {
	ColumnWrapper,
	ColumnContainer,
	SelectBox,
	RowContainer,
	RowWrapper,
} from '../../styles/Components';

const Column = styled.div`
	display: flex;
	justify-content: center;
	${({ width = '100px' }) => `
	width: ${width};
`}
`;

const TableWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const TabHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: ${(props) => props.theme.primaryTextColor};
	padding: ${(props) => props.theme.primaryPadding};
	align-items: center;
	border-bottom: solid 1px #3a2c47;
`;
const ContentWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-around;
	padding: ${(props) => props.theme.primaryPadding};
	width: 100%;
`;

const CreateButton = styled.button`
	height: 25px;
	width: 130px;
	margin: 15px;
	text-align: center;
	background-color: #ab5dff;
	color: whitesmoke;
	border: 2px;
	border-radius: 2px;
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`;

const Table = ({ tableConfig }) => {
	const [rows, setRows] = useState(null);
	const [selectedIds, setSelectedIds] = useState({
		selected: [],
		selectedAll: false,
	});
	const [isDescSorting, setIsDescSorting] = useState(false);

	useEffect(() => {
		const data = tableConfig.apiMethod();
		setRows(data);
	}, [tableConfig]);

	const sortBy = (key) => {
		isDescSorting === false
			? setRows([...rows].sort((a, b) => (a[key] > b[key] ? 1 : -1)))
			: setRows([...rows].sort((a, b) => (a[key] < b[key] ? 1 : -1)));
		setIsDescSorting(!isDescSorting);
	};

	const selectRow = (id) => {
		const isRowSelected = selectedIds.selected.some(
			(selectedId) => selectedId === id
		);
		if (!isRowSelected) {
			setSelectedIds({
				selected: [...selectedIds.selected, id],
				selectedAll: false,
			});
		} else {
			setSelectedIds({
				selected: [
					...selectedIds.selected.filter((selectedId) => selectedId !== id),
				],
				selectedAll: false,
			});
		}
	};

	const setAllRows = () => {
		if (selectedIds.selectedAll === false) {
			setSelectedIds({
				selected: rows.map((row) => row.id),
				selectedAll: true,
			});
		} else {
			setSelectedIds({ selected: [], selectedAll: false });
		}
	};

	if (!rows) {
		return <div>Loading.....</div>;
	}

	return (
		<TableWrapper>
			<TabHeader>
				<ContentWrapper>
					<h4>
						{rows.map((row, index) =>
							index === 0 ? `${row.category}s` : null
						)}
					</h4>

					<CreateButton>
						{rows.map((row, index) =>
							index === 0 ? `New ${row.category}` : null
						)}
					</CreateButton>
				</ContentWrapper>
			</TabHeader>
			<RowContainer>
				<RowWrapper style={{ border: 'none' }}>
					<SelectBox onClick={() => setAllRows()}>
						{selectedIds.selectedAll === true ? (
							<IoCloseOutline color={'white'} />
						) : null}
					</SelectBox>
					<ColumnWrapper>
						{tableConfig.columns.map((column) => (
							<ColumnContainer key={column.label}>
								<Column
									width={column.width}
									onClick={() => sortBy(column.fieldName)}>
									{column.label}
								</Column>
							</ColumnContainer>
						))}
					</ColumnWrapper>
				</RowWrapper>
			</RowContainer>

			{rows.map((row, index) => (
				<RowContainer key={index}>
					<SelectBox onClick={() => selectRow(row.id)}>
						{selectedIds.selected.map((id) =>
							id === row.id ? <IoCloseOutline color={'white'} /> : null
						)}
					</SelectBox>

					<Row
						key={row.id}
						row={row}
						columns={tableConfig.columns}
						Column={Column}
					/>
				</RowContainer>
			))}
		</TableWrapper>
	);
};

export default Table;
