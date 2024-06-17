import { Builder, WebDriver } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';

export async function getDriverInstance(maximized:boolean = true): Promise<WebDriver> {
  const options = new chrome.Options();
  if(maximized){
    options.addArguments('--start-maximized'); 
  }

  const driver: WebDriver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  return driver;
}
