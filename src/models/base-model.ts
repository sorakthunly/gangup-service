import { Model, attr, INTEGER, DATETIME } from 'modelsafe';
import { attr as squellAttr } from 'squell';

export class BaseModel extends Model {
	@attr(INTEGER, { primary: true })
	@squellAttr({ autoIncrement: true })
	id: number;

	@attr(DATETIME)
	createdAt: Date;

	@attr(DATETIME)
	updatedAt: Date;
}
