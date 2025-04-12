export interface IServiceEntity {
	id: string;
	name: string;
	description: string;
	price: number;
}

export interface IServiceMapper {
	value: string
	label: string
	disable: boolean
}
export interface OPTIONS {
	value: string
	label: string
	disable: boolean
}