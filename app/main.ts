import { platformWorkerApp } from '@angular/platform-webworker';
import { AppModuleNgFactory } from './app.module.ngfactory';
const platform = platformWorkerApp();
platform.bootstrapModuleFactory(AppModuleNgFactory);