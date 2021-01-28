import React from 'react';

import Table from '../../components/Table';

function contactsApi() {
	return;
}

const tableConfig = {
	apiMethod: contactsApi,
	columns: [
		{
			label: 'Title',
			fieldName: 'title',
			width: '150px',
		},
		{
			label: 'State',
			fieldName: 'state',
		},
		{
			label: 'Viewed',
			fieldName: 'viewed',
		},
		{
			label: 'Answered',
			fieldName: 'answered',
		},
	],
};

const Contacts = () => {
	return <Table tableConfig={tableConfig} />;
};

export default Contacts;
