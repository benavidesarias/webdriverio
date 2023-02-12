import Page from './page.js';
import { Key } from 'webdriverio';

class SearchPage extends Page{

    constructor(){
        super();
        this.open('https://www.google.com');
    }

    //selectors

    get searchTextbox() {
        return $('[name="q"]');
    }

    get resultHeaders() {
        return $$('a h3').filter(element => element.isDisplayed());
    }

    //methods

    /*
        Input Text into the Search Text Box
    */
    async search(term) {
        await this.searchTextbox.setValue(term);
        await browser.keys(Key.Enter);
    }

    /*
        Get a result/link from results by Index
    */
    async getResultHeader(index){

        const result = this.resultHeaders;

        console.log("RESULTS");
        console.log(`number of headers: ${result.length}`);
        result.forEach( async (element,index) => {
                const text = await element.getText();
                const linkElement = await element.parentElement();
                const linkValue = await linkElement.getAttribute('href');
                console.log(`index: ${index} value: ${text} \nlink: ${linkValue}`);
            });

        const linkElement = await result[index].parentElement();
        const linkValue = await linkElement.getAttribute('href');

        return { element:result[index] , linkValue};
    }

    /*
        Open the Second Result on a new Tab
    */
    async openSecondResult() {        
        const secondResult = await this.getResultHeader(1);
        await this.controlAndClick(secondResult.element);
        await browser.switchWindow(secondResult.linkValue);
    }
}

export default new SearchPage();