import faker, { random } from 'faker';

function generateSurvey() {
	return {
		id: faker.random.uuid(),
		title: faker.random.word(),
		state: faker.random.word(),
		viewed: faker.random.number(),
		answered: random.number(),
		folder: faker.random.word(),
		created: faker.date.month(),
		valid: faker.date.month(),
		by: faker.internet.userName(),
		avatar: faker.image.avatar(),
		category: 'Survey',
	};
}

export function getSurveysMock(count) {
	return Array(count).fill({}).map(generateSurvey);
}
