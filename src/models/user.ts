import { model, attr, STRING, ENUM } from 'modelsafe';

import { BaseModel } from './base-model';

@model()
export class User extends BaseModel {
	@attr(STRING)
	firstName: string;

	@attr(STRING)
	lastName: string;

	@attr(STRING)
	email: string;

	@attr(STRING)
	mobile: string;

	@attr(STRING)
	password: string;

	@attr(ENUM(['MALE', 'FEMALE', 'OTHER']))
	gender: 'MALE' | 'FEMALE' | 'OTHER';
}
