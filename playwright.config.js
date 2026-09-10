// @ts-check
import { defineConfig, devices } from '@playwright/test';


 
const config=({
  testDir: './tests',
  retries: 1,
  timeout:30 * 1000,
  expect : {
     timeout:40 * 1000,
  },
  reporter : 'html',
  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'retain-on-failure',
    // viewport : {width:720, height:720}
  },

  
});

module.exports = config