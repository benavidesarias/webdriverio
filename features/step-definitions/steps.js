import { Given, When, Then } from '@wdio/cucumber-framework';
import SearchPage from '../pageobjects/search.page.js';

const page = SearchPage;

Given(/^I am on google$/, async () => {
    await page.logTitle('Initial');
});

When(/^I search for (\w+)$/, async (term) => {
    await page.search(term);
});

When(/^I open the second result in a new tab$/, async () => {
    await page.openSecondResult();
});

Then(/^the title should contain the (\w+)$/, async (term) => {
    await page.logTitle('Final');
    await expect(browser).toHaveTitleContaining(term,{ignoreCase:true});
});

