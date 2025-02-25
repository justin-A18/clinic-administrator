export class FormatHelper {
	static currency(value: number) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(value);
	}

	static text(value: string) {
		return value
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase()
			.trim();
	}

	static toCutText(value: string, limit: number = 50) {
		return value.length > limit
			? value.slice(0, limit) + '...'
			: value;
	}
}