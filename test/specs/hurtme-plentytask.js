const homePage=require("../../app/Pageobjects/home-page");
const calculatorPage=require("../../app/Pageobjects/pricingcalculator-page");
const estimateCard=require("../../app/Pageobjects/estimatecard");
describe("Hurtme plenty",() =>{
    it("Searching",async() =>{
    await homePage.open()
    await homePage.searchinput.waitForClickable({timeout:3000})
    await homePage.searchinput.click()
    await homePage.searchinput.setValue("Google Cloud Platform Pricing Calculator");
    await browser.keys('Enter');
    await homePage.calculatorlink.waitForDisplayed({timeout:3000})
    await homePage.gotocalculatorpage()
    await homePage.waitingload.waitForDisplayed({timeout:3000})
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
    await estimateCard.estimateBlock.waitForDisplayed({timeout:3000})
})
it("should check compatibility",async() =>{
    await expect(await estimateCard.estimateBlock).toBeDisplayed();
    await expect(await estimateCard.checkRegion).toHaveTextContaining('Region: Frankfurt');
    await expect(await estimateCard.checkInstancetype).toHaveTextContaining('Instance type: n1-standard-8');
    await expect(await estimateCard.checkLocalSSd).toHaveTextContaining('Local SSD: 2x375 GiB');
    await expect(await estimateCard.estimatedCost).toHaveTextContaining('2,275.48')
})
})