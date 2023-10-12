import {ApiConsoleModule} from '@deepkit/api-console-module';
import {App} from '@deepkit/app';
import {FrameworkModule, onServerMainBootstrapDone} from '@deepkit/framework';
import {LoggerInterface} from "@deepkit/logger";
import {eventDispatcher} from "@deepkit/event";
import {reflect, typeOf} from "@deepkit/type";
import {User} from "@lionelhorn/utils";

class Bootstrap {
	constructor(private logger: LoggerInterface) {
	}

	@eventDispatcher.listen(onServerMainBootstrapDone)
	onMainBoostrap() {
		// Some tests

		// console.log(typeOf<User>());
		//
		// const l1 = (event, logger: LoggerInterface) => {
		// 	logger.log(' Automation database filled with data. Open http://127.0.0.1:8080/api to visit the API.');
		// };
		//
		// console.log(typeOf<typeof l1>());
		//
		// function l2(event: any, logger: LoggerInterface) {
		// }
		//
		// console.log(reflect(l2));
		//
		// function l3(event: any, logger: LoggerInterface) {
		// }
		// console.log(l3.__type);

		this.logger.log(' Automation database filled with data. Open http://127.0.0.1:8080/api to visit the API.');
	}
}


const app = new App({
	providers: [],
	listeners: [Bootstrap],
	controllers: [],
	imports: [
		new FrameworkModule({debug: true}),
		new ApiConsoleModule({
			path: '/api'
		}),
	]
});


app.loadConfigFromEnv({prefix: 'APP_'})
	.run(["server:start"]);