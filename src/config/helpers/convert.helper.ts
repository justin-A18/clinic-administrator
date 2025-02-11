export class ConvertHelper {
	static toCapitalCase(value: string) {
		return value
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/\//g, '')
			.toLowerCase()
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
}