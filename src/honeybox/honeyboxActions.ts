import { Agent } from './interfaces/agent';
import { Event } from './interfaces/event';
import { Attack } from './interfaces/attack';
import { createServerAction } from '../shared/helpers/createServerAction';
import { createClientAction } from '../shared/helpers/createClientAction';

export const RequestAgentList = createServerAction<{ page: number, perPage: number }>('honeyfarm.requestAgentList');
export const AgentList = createClientAction<{ agents: Agent[], page: number, perPage: number }>('honeyfarm.agentList');
export const RequestEventList = createServerAction<{ page: number, perPage: number }>('honeyfarm.requestEventList');
export const EventList = createClientAction<{ events: Event[], page: number, perPage: number }>('honeyfarm.eventList');
export const RequestAttackList = createServerAction<{ page: number, perPage: number }>('honeyfarm.requestAttackList');
export const AttackList = createClientAction<{ agents: Attack[], page: number, perPage: number }>('honeyfarm.attackList');
export const RequestServerList = createServerAction<{ page: number, perPage: number }>('honeyfarm.requestServerList');
export const ServerList = createClientAction<{ agents: Attack[], page: number, perPage: number }>('honeyfarm.serverList');
export const RequestSensorList = createServerAction<{ page: number, perPage: number }>('honeyfarm.requestSensorList');
export const SensorList = createClientAction<{ agents: Attack[], page: number, perPage: number }>('honeyfarm.sensorList');
