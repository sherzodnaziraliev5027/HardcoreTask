class Resultblock{
    get estimatedCost(){
        return $("#resultBlock > md-card > md-card-content > div > div > div > div.cpc-cart-total > h2 > b")
    }
}
module.exports=new Resultblock