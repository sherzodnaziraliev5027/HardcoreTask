const Page = require('./page');

class Claim extends Page{
    get getBash(){
        return $("a[href$='bash']").getText();
    }
    get getTitle(){
        return browser.getTitle();
    }
    get getCode(){
        return $("ol[class='bash']");
    }
    get waituntilsuccess(){
        return $("div[class='notice -success -post-view']")
    }
}

module.exports=new Claim;