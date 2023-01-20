class NewWindowPage{
    get emailInput(){
        return $("div[class='emailBlock']")
    }
    get copyEmail(){
        return $("//a[contains(text(),'Copy')]").click();
    }
    get closeWindow(){
        return browser.closeWindow();
    }
    get receivedMassage(){
        return $("//td[contains(text(),'Google')]")
    }
    get loadIframe(){
        return browser.newWindow("https://www.minuteinbox.com/email/id/2")
    }
    get newWindow(){
        return browser.newWindow('https://www.minuteinbox.com/');
    }
}
module.exports=new NewWindowPage