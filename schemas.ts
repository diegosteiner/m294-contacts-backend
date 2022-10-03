
export const updateAddressSchema = {
	body: {
		type: 'object',
		properties: {
			id: { type: 'number' },
			firstName: { type: 'string' },
			lastName: { type: 'string' },
			street: { type: 'string' },
			zipCode: { type: 'string' },
			city: { type: 'string' },
			email: { type: 'string' }
		},
		required: ['id']
	}
}

export const addAddressSchema = {
	body: {
		type: 'object',
		properties: {
			firstName: { type: 'string' },
			lastName: { type: 'string' },
			street: { type: 'string' },
			zipCode: { type: 'string' },
			city: { type: 'string' },
			email: { type: 'string' }
		}
	}
}

export const loginSchema = {
	body: {
		type: 'object',
		properties: {
			email: { type: 'string' },
			password: { type: 'string' }
		},
		required: ['email', 'password']
	}
}
