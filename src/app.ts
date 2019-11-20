import { Application as Restla, ApplicationOptions, Router } from 'restla';

import { database } from './utils/database';
import { logger } from './utils/logger';
import { routers } from './routers';

const cors = require('koa2-cors');
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
			return logger.error('Could not sync database models:', err.stack);
		}

		await this.listen(port, () => {
			logger.info('Listening on port: ' + port);
		});
	}
}

export const app = new Application();
