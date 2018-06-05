import {
	connectionReducer,
	ConnectionState, defaultConnectionState
} from './connection/connectionReducer';
import {
	authenticationReducer,
	AuthenticationState, defaultAuthenticationState
} from './authentication/authenticationReducer';
import { combineReducers } from 'redux';
import {
	defaultHoneyfarmState,
	honeyboxReducer,
	HoneyfarmState
} from './honeybox/honeyboxReducer';

export const rootReducer = combineReducers({
	sessions: connectionReducer,
	authentication: authenticationReducer,
	connection: connectionReducer,
	honeyfarm: honeyboxReducer
});

export interface AppState {
	authentication: AuthenticationState;
	connection: ConnectionState;
	honeyfarm: HoneyfarmState;
}

export const defaultAppState: AppState = {
	authentication: defaultAuthenticationState,
	connection: defaultConnectionState,
	honeyfarm: defaultHoneyfarmState
};