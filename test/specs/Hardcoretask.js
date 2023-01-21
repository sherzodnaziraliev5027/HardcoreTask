const homePage=require("../../app/Pageobjects/home-page");
const calculatorPage=require("../../app/Pageobjects/pricingcalculator-page");
const estimateCard=require("../../app/Pageobjects/estimatecard");
const emailPage=require("../../app/Pageobjects/emailPage");
const newWindowPage=require('../../app/Pageobjects/newWindowPage')
const iframeGoogleCloud=require('../../app/Pageobjects/iframe-googlecloud')
describe("HardCore task",() =>{
    it("Searching",async() =>{
    await homePage.open()
    await homePage.searchinput.waitForClickable({timeout:3000})
    await homePage.searchinput.click()
    await homePage.searchinput.setValue("Google Cloud Platform Pricing Calculator");
    await browser.keys('Enter');
    await homePage.calculatorlink.waitForDisplayed({timeout:5000})
    await homePage.gotocalculatorpage()
    await homePage.waitingload.waitForDisplayed({timeout:5000})
    })
    it("Compute engine",async() => {
    await calculatorPage.open();
    await calculatorPage.numberOfInstances.waitForDisplayed({timeout:5000})
    await calculatorPage.numberOfInstances.setValue(4);
    await calculatorPage.instancesfor.setValue('leave blank');
    await calculatorPage.clickSelection.waitForClickable({timeout:3000})
    await calculatorPage.clickSelection.click()
    await calculatorPage.selectN1.click()
    await calculatorPage.clickselectionN1Standart.click()
    await calculatorPage.selectN1Standart8GbGpu.waitForClickable({timeout:3000})
    await calculatorPage.selectN1Standart8GbGpu.click()
    await calculatorPage.makeCheckedAddGpus.waitForClickable({timeout:3000})
    await calculatorPage.makeCheckedAddGpus.click();
    await calculatorPage.makeunCheckedDiscounts.click()
    await calculatorPage.clickGpuType.waitForClickable({timeout:3000})
    await calculatorPage.clickGpuType.click()
    await calculatorPage.selectGpuType.waitForDisplayed({timeout:3000})
    await calculatorPage.selectGpuType.click()
    await calculatorPage.clickNumberofGpus.waitForClickable({timeout:3000})
    await calculatorPage.clickNumberofGpus.click()
    await calculatorPage.selectNumberofGpus.waitForDisplayed({timeout:3000})
    await calculatorPage.selectNumberofGpus.click()
    await calculatorPage.clickLocalSSd.waitForClickable({timeout:3000})
    await calculatorPage.clickLocalSSd.click()
    await calculatorPage.selectLocalSSd.click()
    await calculatorPage.clickDataCenterLocation.waitForClickable({timeout:3000})
    await calculatorPage.clickDataCenterLocation.click();
    await calculatorPage.selectDataCenterLocation.waitForDisplayed({timeout:3000});
    await calculatorPage.selectDataCenterLocation.click();
    await calculatorPage.clickDataUsage.click();
    await calculatorPage.selectDataUsage.click();
    await calculatorPage.clickButton.click();
    await estimateCard.estimateBlock.waitForDisplayed({timeout:5000});
    await estimateCard.goToEmailPage
})
it("Copying email from new window and check cost",async() =>{
    await newWindowPage.newWindow;
    await newWindowPage.emailInput.waitForDisplayed({timeout:5000});
    await newWindowPage.copyEmail
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])
    await emailPage.emailInput.waitForDisplayed({timeout:5000})
    await emailPage.emailInput.click()
    await emailPage.pasteEmail
    await emailPage.sendButton.waitForClickable({timeout:5000})
    await emailPage.sendData
    await browser.switchToWindow(handles[1])
    await newWindowPage.receivedMassage.waitForDisplayed({timeout:10000})
    await newWindowPage.loadIframe
    await expect(await iframeGoogleCloud.checkExisting).toExist()
    const getCost=await iframeGoogleCloud.getestimatedCost;
    await browser.switchToWindow(handles[0])
    await estimateCard.estimatedCost.waitForDisplayed({timeout:3000})
    await expect(await estimateCard.estimatedCost).toHaveTextContaining(getCost)
})
})