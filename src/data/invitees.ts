import { Invitee } from '../models/invitee';

const now = new Date();

export const invitees: Invitee[] = [
	new Invitee({
		id: 1,
		userId: 1,
		eventId: 1,
		createdAt: now,
		updatedAt: now
	}),
	new Invitee({
		id: 2,
		userId: 2,
		eventId: 2,
		createdAt: now,
		updatedAt: now
	})
];
