import {MinLength, validate} from "@deepkit/type";

export interface User {
	id: number;
	username: string & MinLength<100>
}

export function testUser() {
	console.log(validate<User>({id: 1, username: 'Joe'}));
}