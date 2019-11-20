import { Router, RouterContext } from 'restla';

import { Event } from '../models/event';
import { Invitee } from '../models/invitee';
import { database } from '../utils/database';

export const EventRouter = new Router();

EventRouter.get('/events/public', async (context: RouterContext) => {
	const events = await database
		.query(Event)
		.where(event => event.isPublic.eq(true))
		.include(Invitee, event => event.invitees)
		.find();

	context.body = events;
});

EventRouter.get('/events/:id', async (context: RouterContext) => {
	console.log(context.params);
	const events = await database
		.query(Event)
		.where(event => event.id.eq(context.params.id))
		.include(Invitee, event => event.invitees)
		.findOne();

	context.body = events;
});
