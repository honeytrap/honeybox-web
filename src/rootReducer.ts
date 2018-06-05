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
	honeyfarmReducer,
	HoneyfarmState
} from './honeyfarm/honeyfarmReducer';

export const rootReducer = combineReducers({
	sessions: connectionReducer,
	authentication: authenticationReducer,
	connection: connectionReducer,
	honeyfarm: honeyfarmReducer
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