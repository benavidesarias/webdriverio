import { Key } from 'webdriverio';

export default class Page{

    async open(path){
        return browser.url(path);
    }

    async logTitle(prefix){
        const title = await browser.getTitle();
        console.log(`${prefix} Page Title: ${title}`);
    }

    async controlAndClick(element){

        const platformName = browser.capabilities.platformName;
        const isMac = (
            // check capabilities first
            platformName && platformName.match(/mac(\s)*os/i)
        )
        const ctlKey =  isMac ? Key.Command : Key.Control

        console.log('KEY:');
        console.log(ctlKey);

        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyDown', value: ctlKey}]
        }]);

        await element.click();

        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyUp', value: ctlKey}]
        }]);
    }
   
}