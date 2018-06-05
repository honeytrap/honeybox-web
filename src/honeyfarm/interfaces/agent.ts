export interface Agent {
	agentId: string;
	description: string;
	status: 'online' | 'offline';
	address: string;
	location: string;
	services: string[];
}