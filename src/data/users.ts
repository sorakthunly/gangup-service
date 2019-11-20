import { hashSync } from 'bcrypt';

import { User } from '../models/user';

const now = new Date();

export const users: User[] = [
	new User({
		id: 1,
		firstName: 'John',
		lastName: 'Doe',
		email: 'johndoe@benon.com',
		mobile: '0412341234',
		gender: 'MALE',
		password: hashSync('password', 10),
		createdAt: now,
		updatedAt: now
	}),
	new User({
		id: 2,
		firstName: 'Jane',
		lastName: 'Doe',
		email: 'janedoe@benon.com',
		mobile: '0412341235',
		gender: 'FEMALE',
		password: hashSync('password', 10),
		createdAt: now,
		updatedAt: now
	})
];
