export interface IServiceEntity {
	id: number;
	name: string;
	description: string;
	price: number;
}

export interface IServiceMappper{
	value: number
	label: string
	disable: boolean
}