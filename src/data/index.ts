import { Model, ModelConstructor } from 'modelsafe';
import { Database } from 'squell';

import { Event } from '../models/event';
import { Invitee } from '../models/invitee';
import { User } from '../models/user';
import { events } from './events';
import { invitees } from './invitees';
import { users } from './users';

async function seedModelData(database: Database, model: ModelConstructor<Model>, data: Model[]) {
	const count = await database.query(model).count();

	if (count < 1) {
		await database.query(model).bulkCreate(data);
	}
}

export async function seedData(database: Database): Promise<void> {
	await seedModelData(database, User, users);
	await seedModelData(database, Event, events);
	await seedModelData(database, Invitee, invitees);
}
