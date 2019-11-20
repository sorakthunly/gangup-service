import { Router, RouterContext } from 'restla';
import { database } from '../utils/database';
import { Event } from '../models/event';

export const EventRouter = new Router();

EventRouter.get('/events/public', async (context: RouterContext) => {
	const events = await database.query(Event).find();
	context.body = events;
});
