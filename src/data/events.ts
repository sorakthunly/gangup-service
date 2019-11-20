import { addHours } from 'date-fns';

import { Event } from '../models/event';
import { Invitee } from '../models/invitee';

const now = new Date();

export const events: Event[] = [
	new Event({
		id: 1,
		name: 'Halloween Party',
		description: 'Halloween party with everyone',
		isPublic: true,
		canInviteExtendedGuests: true,
		maxAdultExtendedGuests: 50,
		maxChildExtendedGuests: 20,
		startTime: now,
		finishTime: addHours(now, 3),
		shouldInviteAll: true,
		invitees: [
			new Invitee({
				userId: 1
			}),
			new Invitee({
				userId: 2
			})
		],
		createdAt: now,
		updatedAt: now
	}),
	new Event({
		id: 2,
		name: 'Christmas Party',
		description: 'Halloween party with everyone',
		isPublic: true,
		canInviteExtendedGuests: true,
		maxAdultExtendedGuests: 50,
		maxChildExtendedGuests: 20,
		startTime: addHours(now, 1),
		finishTime: addHours(now, 3),
		shouldInviteAll: true,
		invitees: [
			new Invitee({
				userId: 1
			}),
			new Invitee({
				userId: 2
			})
		],
		createdAt: now,
		updatedAt: now
	})
];
