class NewWindowPage{
    get emailInput(){
        return $("body > div:nth-child(2) > div:nth-child(4) > div > div.emailBlock")
    }
    get copyEmail(){
        return $("body > div:nth-child(2) > div:nth-child(4) > div > a.blockLink.copy.cetc").click();
    }
    get closeWindow(){
        return browser.closeWindow();
    }
    get receivedMassage(){
        return $("#schranka > tr:nth-child(1) > td:nth-child(2)")
    }
    get loadIframe(){
        return browser.newWindow("https://www.minuteinbox.com/email/id/2")
    }
    get newWindow(){
        return browser.newWindow('https://www.minuteinbox.com/');
    }
}
module.exports=new NewWindowPage