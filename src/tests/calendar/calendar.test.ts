import { By, WebDriver } from 'selenium-webdriver';
import { getDriverInstance } from '../../driverHelper';
import { clickXpath, pickDateByResource, verifyEventCount} from '../../pageHelper';

let driver: WebDriver;
const url:string = "http://stephenchou1017.github.io/scheduler/#/infinitescroll";

const monthXp:string = '//*[contains(@class, ant-radio-button-wrapper)]//*[contains(text(), "Month")]';
const eventXp:string = `//*[contains(@class,"timeline-event")]//*[contains(text(),"New event you just created")]`;
const iconRight:string = '//*[contains(@data-icon,"right")]';
const iconLeft:string = '//*[contains(@data-icon,"left")]';


beforeAll(async () => {
  driver = await getDriverInstance();
}, 30000);

afterAll(async () => {
  if(driver){
      await driver.quit();
  }
});

describe('E2E tests', () => {
  it('Calendar basic validations" ', async () => {

    await driver.get(url);
    await clickXpath(driver, monthXp);

    //create several new events and verify the creation.
    await pickDateByResource(driver,'Resource3',4)
    await driver.switchTo().alert().accept();
    
    await pickDateByResource(driver,'Resource2',8)
    await driver.switchTo().alert().accept();
   
    await verifyEventCount(driver,eventXp,2);
    
    //go ahead one month and verify the new events (events are not repeating)
    await clickXpath(driver,iconRight);
    await verifyEventCount(driver,eventXp,0);

    //go back to the original date and check if the events that you have created still exist.
    await clickXpath(driver,iconLeft);
    await verifyEventCount(driver,eventXp,2);
  },300000);

});