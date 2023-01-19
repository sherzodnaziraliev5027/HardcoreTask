class Iframe{
    get checkExisting(){
        return $('#Email > table > tbody > tr:nth-child(1) > td')
    }
    get getestimatedCost(){
        return $("td > table > tbody > tr:nth-child(2) > td:nth-child(2) > h3").getText()
    }
}
module.exports=new Iframe