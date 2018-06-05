import { Attack } from './interfaces/attack';
import { Agent } from './interfaces/agent';
import {
	AgentList,
	AttackList,
	EventList,
	SensorList, ServerList
} from './honeyboxActions';
import { Server } from './interfaces/server';
import { Sensor } from './interfaces/sensor';
import { ObjectMap } from '../shared/interfaces/objectMap';

export interface HoneyfarmState {
	events: ObjectMap<Event>;
	attacks: ObjectMap<Attack>;
	agents: ObjectMap<Agent>;
	servers: ObjectMap<Server>;
	sensors: ObjectMap<Sensor>;
}

export const defaultHoneyfarmState: HoneyfarmState = {
	events: {},
	attacks: {},
	agents: {},
	servers: {},
	sensors: {}
};

const arrayToMap = (array: any[], idProp: string): ObjectMap<any> => {
	const map = {};

	array.forEach(item => map[item[idProp]] = item);

	return map;
};

export function honeyboxReducer(state: HoneyfarmState = defaultHoneyfarmState, action): HoneyfarmState {
    console.log('action', action);
	switch (action.type) {
		case AgentList.type: {
			return {
				...state,
				agents: arrayToMap(action.payload.agents, 'agentId')
			};
		}

		case AttackList.type: {
			return {
				...state,
				attacks: arrayToMap(action.payload.attacks, 'agentId')
			};
		}

		case EventList.type: {
			return {
				...state,
				agents: arrayToMap(action.payload.agents, 'agentId')
			};
		}

		case SensorList.type: {
			return {
				...state,
				sensors: arrayToMap(action.payload.sensors, 'sensorId')
			};
		}

		case ServerList.type: {
			return {
				...state,
				servers: arrayToMap(action.payload.servers, 'serverId')
			};
		}

		default: {
			return state;
		}
	}
}
