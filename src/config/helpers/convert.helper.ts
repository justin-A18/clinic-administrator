export class ConvertHelper {
	static toCapitalCase(value: string, slice: number = 0) {
		return value
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/\//g, '')
			.slice(slice, value.length)
			.toLowerCase()
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
}