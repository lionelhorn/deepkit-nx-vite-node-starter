import {ApiConsoleModule} from '@deepkit/api-console-module';
import {App} from '@deepkit/app';
import {FrameworkModule, onServerMainBootstrapDone} from '@deepkit/framework';
import {testUser} from "@lionelhorn/utils";
import {LoggerInterface} from "@deepkit/logger";
import {eventDispatcher} from "@deepkit/event";

class Bootstrap {
	constructor(private logger: LoggerInterface) {
	}

	@eventDispatcher.listen(onServerMainBootstrapDone)
	async onMainBoostrap() {

		this.logger.log(' Automation database filled with data. Open http://127.0.0.1:8080/api to visit the API.');
	}
}


const app = new App({
	providers: [],
	listeners: [Bootstrap],
	controllers: [],
	imports: [
		new FrameworkModule({
			// debug: true,
		}),
		new ApiConsoleModule({
			path: '/api'
		}),
	]
});


app.loadConfigFromEnv({prefix: 'APP_'})
	.run(["server:start"]);

testUser();