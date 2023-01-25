const homePage = require('../../app/pageobjectspastebin/home-page');


describe("Epam task 1",() => {
    // Task 1
    it("Task 1",async() => {
        await homePage.open();
        await homePage.textArea.waitForExist({timeout:3000})
        await homePage.textArea.setValue("Hello from WebDriver");
        await homePage.pasteNameTitle.setValue("helloweb");
        await homePage.makingVisiblePasteExpiration.click();
        await homePage.selectingPasteExpiration.click();
    })
})