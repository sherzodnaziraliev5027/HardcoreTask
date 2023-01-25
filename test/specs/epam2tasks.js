const homePage = require("../../app/pageobjectspastebin/home-page");
const claimPage=require("../../app/pageobjectspastebin/claim-page");

describe("Epam task 2",() => {
    it("first test",async() =>{
        await homePage.open();
        await homePage.textArea.setValue(`git config --global user.name "New Sheriff in Town"
        git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
        git push origin master --force`);
        await homePage.makingVisiblePasteExpiration.click();
        await homePage.selectingPasteExpiration.click();
        await homePage.makingVisibleSyntaxHighlighting.click()
        await homePage.selectingSyntaxHighlighting.click();
        await homePage.pasteNameTitle.waitForDisplayed({timeout:3000})
        await homePage.pasteNameTitle.setValue("how to gain dominance among developers");
        await homePage.goToClaimPage();
        });
    it('second test',async() =>{
        await claimPage.waituntilsuccess.waitForDisplayed({ timeout: 3000 })   
        await expect(await claimPage.getBash).toEqual("Bash");
        await expect(await claimPage.getTitle).toEqual("how to gain dominance among developers - Pastebin.com");
        await claimPage.getCode.waitForExist({ timeout: 3000 })   
        await expect(await claimPage.getCode).toExist()
    })        
    }); 