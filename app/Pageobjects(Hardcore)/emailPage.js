class EmailPage{
    get emailInput(){
        return $("//*[@id]/form/md-content/div[3]/md-input-container/input")
    }
    get pasteEmail(){
        return browser.keys(["\uE051",'v']);
    }
    get sendButton(){
        return $("form > md-dialog-actions > button.md-raised.md-primary.cpc-button.md-button.md-ink-ripple");
    }
    get sendData(){
        return this.sendButton.click();
    }
}
module.exports=new EmailPage