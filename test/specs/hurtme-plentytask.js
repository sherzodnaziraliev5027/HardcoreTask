const homePage=require("../../app/Pageobjects/home-page");
const calculatorPage=require("../../app/Pageobjects/pricingcalculator-page");
const estimateCard=require("../../app/Pageobjects/estimatecard");
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
    await browser.pause(5000)
})
it("should check compatibility",async() =>{
    await expect(await estimateCard.estimateBlock).toBeDisplayed();
    await expect(await estimateCard.checkRegion).toHaveTextContaining('Region: Frankfurt');
    await expect(await estimateCard.checkInstancetype).toHaveTextContaining('Instance type: n1-standard-8');
    await expect(await estimateCard.checkLocalSSd).toHaveTextContaining('Local SSD: 2x375 GiB');
    await expect(await estimateCard.estimatedCost).toHaveTextContaining('2,275.48')
})
})