class Iframe{
    get checkExisting(){
        return $("td[style*='logo']")
    }
    get getestimatedCost(){
        return $("//h3[contains(text(),'USD')]").getText()
    }
}
module.exports=new Iframe