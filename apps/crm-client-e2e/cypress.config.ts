import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run crm-client:serve',
        production: 'nx run crm-client:preview',
      },
      ciWebServerCommand: 'nx run crm-client:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
