export interface Server {
	serverId: string;
	name: string;
	status: 'online' | 'offline';
	ip: string;
	services: string[];
	firstSeen: number;
}