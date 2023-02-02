const yargs=require('yargs').argv
const homePage=require("../../app/Pageobjects/home-page");
describe("Searching suite",() =>{
    it("Searching",async() =>{
    await homePage.open()
    await homePage.searchinput.waitForClickable({timeout:5000})
    await homePage.searchinput.click()
    await homePage.searchinput.setValue("Google Cloud Platform Pricing Calculator");
    await browser.keys('Ente');
    await homePage.calculatorlink.waitForDisplayed({timeout:5000})
    await homePage.gotocalculatorpage()
    await homePage.waitingload.waitForDisplayed({timeout:5000})
    console.log(yargs.browser);
    })
})