import { Application as Restla, ApplicationOptions, Router } from 'restla';

import { seedData } from './data';
import { routers } from './routers';
import { database } from './utils/database';
import { logger } from './utils/logger';

const cors = require('koa2-cors'); // eslint-disable-line
const port = process.env.PORT || 4000;

export class Application extends Restla {
	constructor(options?: Partial<ApplicationOptions>) {
		super({
			multipart: true,
			...options
		});

		const appRouter = new Router();
		routers.forEach(router => appRouter.use(router.routes()));

		this.use(cors());
		this.use(appRouter.routes());
		this.bootstrap();
	}

	protected async bootstrap() {
		logger.info('Syncing database models');

		try {
			await database.sync();
		} catch (err) {
			console.log(err);

			return logger.error('Could not sync database models:', err.stack);
		}

		logger.info('Seeding data');

		await seedData(database).catch(err => {
			logger.info('Data failed to seed:', err);
			console.log(err);
		});

		await this.listen(port, () => {
			logger.info('Listening on port: ' + port);
		});
	}
}

export const app = new Application();
