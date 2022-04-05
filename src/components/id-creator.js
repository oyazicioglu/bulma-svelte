export class IdCreator {
	static create() {
		return Math.random().toString(16).split('.')[1];
	}
}
