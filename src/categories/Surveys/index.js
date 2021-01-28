import React from 'react';
import { getSurveysMock } from '../../generators/surveys';
import Table from '../../components/Table/index';

const surveysData = getSurveysMock(10);

function surveysApi() {
	return surveysData;
}

const tableConfig = {
	apiMethod: surveysApi,
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
		{
			label: 'Folder',
			fieldName: 'folder',
		},
		{
			label: 'Created',
			fieldName: 'created',
		},
		{
			label: 'Valid until',
			fieldName: 'valid',
		},
		{
			label: 'Created by',
			fieldName: 'by',
		},
	],
};

const Surveys = () => {
	return <Table tableConfig={tableConfig} />;
};

export default Surveys;
