export const stateSchema = {
	type: 'object',
	definitions: {},
	properties: {
		comments: {
			type: 'array',
			items: {
				type: 'string',
				default: '',
			},
		},
		auth: {
			type: 'boolean',
			default: false,
		},
	},
};
