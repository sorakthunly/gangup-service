import { assoc, attr, BOOLEAN, DATETIME, HAS_MANY, INTEGER, model, STRING, TEXT } from 'modelsafe';

import { BaseModel } from './base-model';
import { Invitee } from './invitee';

@model()
export class Event extends BaseModel {
	@attr(STRING)
	name: string;

	@attr(TEXT)
	description: string;

	@attr(BOOLEAN, { defaultValue: true })
	isPublic: boolean;

	@attr(BOOLEAN, { defaultValue: false })
	canInviteExtendedGuests: boolean;

	@attr(INTEGER, { optional: true })
	maxAdultExtendedGuests: number;

	@attr(INTEGER, { optional: true })
	maxChildExtendedGuests: number;

	@attr(DATETIME)
	startTime: Date;

	@attr(DATETIME)
	finishTime: Date;

	@attr(BOOLEAN, { defaultValue: false })
	shouldInviteAll: boolean;

	@assoc(HAS_MANY, () => Invitee)
	invitees?: Invitee[];
}
