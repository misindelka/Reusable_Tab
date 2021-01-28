import React from 'react';

import {
	ColumnWrapper,
	ColumnContainer,
	RowWrapper,
} from '../../styles/Components';

const Row = ({ row, columns, Column }) => {
	return (
		<RowWrapper>
			<ColumnWrapper>
				{columns.map((column, index) => {
					return (
						<ColumnContainer key={index}>
							<Column width={column.width}>{row[column.fieldName]} </Column>
						</ColumnContainer>
					);
				})}
			</ColumnWrapper>
		</RowWrapper>
	);
};

export default Row;
