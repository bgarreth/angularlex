import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
Amplify.configure({
  Auth: {
    identityPoolId: 'eu-west-1:0e7301d8-bb37-4de7-afaf-5d5e6708c454',
    region: 'eu-west-1'
  },
  Interactions: {
    bots: {
      "BookTrip_dev": {
        "name": "BookTrip_dev",
        "alias": "$LATEST",
        "region": "eu-west-1",
      },
    }
  }
});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
