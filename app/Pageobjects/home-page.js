const Page=require("./page");

class Homepage extends Page{
    get searchinput(){
        return $("input[placeholder='Search']");
    }
    get calculatorlink(){
        return $("div[class$='gs-title'] > [href$='products/calculator']")
    }
    get waitingload(){
        return $("//a[contains(text(),'Contact Us')]")
    }
    open(){
        return super.open("https://cloud.google.com/")
    }
    async gotocalculatorpage(){
        await this.calculatorlink.click();
    }
}
module.exports=new Homepage;