export interface IServiceEntity {
	id: string;
	name: string;
	description: string;
	price: number;
}

export interface IServiceMappper{
	value: string
	label: string
	disable: boolean
}