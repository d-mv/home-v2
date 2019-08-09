export const stringLine = (text: string[]) =>
	text
		.join('-')
		.split(' ')
		.join('-');
