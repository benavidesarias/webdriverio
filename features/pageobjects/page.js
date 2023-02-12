export default class Page{

    async open(path){
        return browser.url(path);
    }

    async logTitle(prefix){
        const title = await browser.getTitle();
        console.log(`${prefix} Page Title: ${title}`);
    }

    async controlAndClick(element){

        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyDown', value: '' }]
        }]);

        await element.click();

        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyUp', value: '' }]
        }]);
    }
   
}