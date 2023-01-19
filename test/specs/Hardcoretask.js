const homePage=require("../../app/Pageobjects(Hardcore)/home-page");
const calculatorPage=require("../../app/Pageobjects(Hardcore)/pricingcalculator-page");
const estimateCard=require("../../app/Pageobjects(Hardcore)/estimatecard");
const emailPage=require("../../app/Pageobjects(Hardcore)/emailPage");
const newWindowPage=require('../../app/Pageobjects(Hardcore)/newWindowPage')
const iframeGoogleCloud=require('../../app/Pageobjects(Hardcore)/iframe-googlecloud')
const resultBlock=require('../../app//Pageobjects(Hardcore)/resultBlock');
describe("Hurtme plenty",() =>{
    it("Searching",async() =>{
        await homePage.open()
        await homePage.searchinput.click()
        await homePage.searchinput.setValue("Google Cloud Platform Pricing Calculator");
        await browser.keys('Enter');
        await expect(homePage.calculatorlink).toBeDisplayed()
        await homePage.gotocalculatorpage()
        await expect(browser).toHaveTitleContaining('Pricing Calculator')
        await browser.pause(2000); 
    })
    it("Compute engine",async() => {
    await calculatorPage.open();
    await browser.pause(3000)
    await calculatorPage.numberOfInstances.setValue(4);
    await calculatorPage.instancesfor.setValue('leave blank');
    await expect(calculatorPage.clickSelection).toBeClickable({wait:5000})
    await calculatorPage.clickSelection.click()
    await calculatorPage.selectN1.click()
    await calculatorPage.clickselectionN1Standart.click()
    await calculatorPage.selectN1Standart8GbGpu.click()
    await expect(calculatorPage.makeCheckedAddGpus).toBeClickable()
    await calculatorPage.makeCheckedAddGpus.click();
    await calculatorPage.makeunCheckedDiscounts.click()
    await expect(calculatorPage.clickGpuType).toBeClickable({wait:5000})
    await calculatorPage.clickGpuType.click()
    await calculatorPage.selectGpuType.click()
    await expect(calculatorPage.clickNumberofGpus).toBeClickable({wait:5000})
    await calculatorPage.clickNumberofGpus.click()
    await calculatorPage.selectNumberofGpus.click()
    await expect(calculatorPage.clickLocalSSd).toBeClickable({wait:5000})
    await calculatorPage.clickLocalSSd.click()
    await calculatorPage.selectLocalSSd.click()
    await expect(calculatorPage.clickDataCenterLocation).toBeClickable({wait:5000})
    await calculatorPage.clickDataCenterLocation.click();
    await calculatorPage.selectDataCenterLocation.click();
    await expect(calculatorPage.clickDataUsage).toBeClickable({wait:5000})
    await calculatorPage.clickDataUsage.click();
    await calculatorPage.selectDataUsage.click();
    await calculatorPage.clickButton.click();
    await expect(await estimateCard.estimateBlock).toBeDisplayed();
    await browser.pause(1000)
    await estimateCard.goToEmailPage
})
it("Copying email from new window and check cost",async() =>{
    await newWindowPage.newWindow;
    await browser.pause(2000)
    await expect(await newWindowPage.emailInput).toBeDisplayed();
    await newWindowPage.copyEmail
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])
    await browser.pause(3000)
    await emailPage.emailInput.click()
    await emailPage.pasteEmail
    await browser.pause(2000)
    await expect(emailPage.sendButton).toBeClickable({wait:5000})
    await emailPage.sendData
    await browser.pause(2000)
    await browser.switchToWindow(handles[1])
    await expect(await newWindowPage.receivedMassage).toHaveTextContaining('Google Cloud Price Estimate')
    await newWindowPage.loadIframe
    await expect(await iframeGoogleCloud.checkExisting).toExist()
    await browser.pause(2000)
    const getCost=await iframeGoogleCloud.getestimatedCost;
    await browser.switchToWindow(handles[0])
    await browser.pause(2000)
    await expect(await resultBlock.estimatedCost).toHaveTextContaining(getCost)
})
})