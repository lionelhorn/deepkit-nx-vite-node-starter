import { http, HttpBody } from "@deepkit/http";

interface Ad {
	url: string;
}

@http.controller("tests")
export class TestController {
	@http.POST("/array")
	async echoArray(search: HttpBody<{ data: Array<Ad> }>) {
		return { count: search.data.length, data: search.data };
	}
}
