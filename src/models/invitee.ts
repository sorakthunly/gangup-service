import { assoc, attr, BELONGS_TO, INTEGER, model } from 'modelsafe';

import { BaseModel } from './base-model';
import { Event } from './event';
import { User } from './user';

@model()
export class Invitee extends BaseModel {
	@attr(INTEGER)
	eventId: number;

	@assoc(BELONGS_TO, () => Event)
	event?: Event;

	@attr(INTEGER)
	userId: number;

	@assoc(BELONGS_TO, () => User)
	user?: User;
}
