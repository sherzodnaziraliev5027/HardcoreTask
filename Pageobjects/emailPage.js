class EmailPage{
    get emailInput(){
        return $("input[type='email']")
    }
    get pasteEmail(){
        return browser.keys(["\uE051",'v']);
    }
    get sendButton(){
        return $("//button[contains(text(),'Send Email')]");
    }
    get sendData(){
        return this.sendButton.click();
    }
}
module.exports=new EmailPage