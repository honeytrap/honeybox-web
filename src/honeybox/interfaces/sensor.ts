export interface Sensor {
	sensorId: string;
	name: string;
	status: 'online' | 'offline';
	ip: string;
	services: string[];
	firstSeen: number;
}