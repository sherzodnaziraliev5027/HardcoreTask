const Page = require('./page.js');

class Homepage extends Page{

    get textArea(){
        return $("#postform-text");
    }
    get pasteNameTitle(){
        return $("#postform-name");
    }

    get makingVisibleSyntaxHighlighting(){
        return $("#select2-postform-format-container");
    }
    get makingVisiblePasteExpiration(){
        return $("#select2-postform-expiration-container");
    }
  
    get selectingPasteExpiration(){
        return $("li[id$='10M']");
    }

    get selectingSyntaxHighlighting(){
        return $("//li[text()='Bash']");
    }
    get clickSubmitButton(){
        return $("//button[text()='Create New Paste']");
    }

  
    open(){
       return super.open('https://pastebin.com/')
    }
    async goToClaimPage(){
        await this.clickSubmitButton.click();
    }
}
module.exports=new Homepage