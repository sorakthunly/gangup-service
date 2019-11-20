import { Database } from 'squell';
import { logger } from './logger';

import { Event } from '../models/event';
import { User } from '../models/user';

if (!process.env.GANGUP_DB_URL) {
	throw new Error(`The environment variable GANGUP_DB_URL is required -
                   a sane default might be 'mysql://root:root@localhost/name'`);
}

export const logging = process.env.LOG_SQL ? logger.debug.bind(logger) : false;
export const database = new Database(process.env.GANGUP_DB_URL, {
	logging: true
});

const defineDatabaseModels = () => {
	database.define(Event);
	database.define(User);
};

defineDatabaseModels();
