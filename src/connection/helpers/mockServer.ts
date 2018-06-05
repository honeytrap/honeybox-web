import { Server } from '../../honeyfarm/interfaces/server';

interface Response {
	willRespond: Function;
	type: string;
	[property: string]: any;
}

const authSuccessPayload = {
	jwtToken: 'vndfjvndf',
	user: {
		userId: 'vdfjnvndfjnvdf',
		name: 'Thomas',
		email: 'thomas@webvalid.nl',
		company: 'DutchSec'
	}
};

const servers: Server[] = [
	{
		serverId: 'vffbvdfh',
		name: 'Superserver',
		status: 'online',
		ip: '1.1.1.1',
		services: ['smtp', 'http'],
		firstSeen: 1527242503000,
	},
	{
		serverId: 'vffbvdfh2',
		name: 'Superserver 2',
		status: 'offline',
		ip: '1.1.1.2',
		services: ['smtp', 'http'],
		firstSeen: 1527242503000,
	}
];

export const responses: Response[] = [
	{
		willRespond: (action) => action.type === 'authentication.login' && action.payload.username !== 'wrong@gmail.com',
		type: 'authentication.loginSuccess',
		payload: authSuccessPayload
	},
	{
		willRespond: (action) => action.type === 'authentication.login' && action.payload.username === 'wrong@gmail.com',
		type: 'authentication.loginFailed'
	},
	{
		willRespond: (action) => action.type === 'authentication.resumeSession',
		type: 'authentication.resumeSessionSuccess',
		payload: authSuccessPayload
	},
	{
		willRespond: (action) => action.type === 'authentication.signUp' && action.payload.email === 'exists@gmail.com',
		type: 'authentication.signUpFailed',
		payload: {
			errors: {
				email: 'alreadyExists'
			}
		}
	},
	{
		willRespond: (action) => action.type === 'authentication.signUp' && action.payload.email !== 'exists@gmail.com',
		type: 'authentication.signUpSuccess',
		payload: authSuccessPayload
	},
	{
		willRespond: (action) => action.type === 'honeyfarm.requestServerList',
		type: 'honeyfarm.serverList',
		payload: {
			servers,
			page: 1,
			perPage: 20
		}
	},
];

export function getResponse(action) {
	const response = responses.find(response => response.willRespond(action));

	if (!response) {
		return null;
	}

	const responseCopy = {
		...response
	};

	delete responseCopy.willRespond;

	console.log('Mocking server response: ', responseCopy);

	return {
		data: JSON.stringify(responseCopy)
	};
}