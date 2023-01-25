const Page=require("./page");

class Calculator extends Page{
    get numberOfInstances(){
        return $("input[ng-model$='quantity']");
    }
    get instancesfor(){
        return $("input[ng-model$='computeServer.label']");
    }
    get clickSelection(){
        return $("md-select[placeholder='Series']")
    }
    get selectN1(){
        return $("//div[contains(text(),'N1')]")
    }
    get clickselectionN1Standart(){
        return $("md-select[placeholder='Instance type']")
    }
    get selectN1Standart8GbGpu(){
        return $("md-option[value$='N1-STANDARD-8']")
    }
    get makeunCheckedDiscounts(){
        return $("md-checkbox[ng-model$='computeServer.addSud'] > div.md-label")
    }
    get makeCheckedAddGpus(){
        return $("md-checkbox[ng-model$='computeServer.addGPUs']")
    }
    get clickGpuType(){
        return $("md-select[placeholder='GPU type']")
    }
    get selectGpuType(){
        return $("md-option[value='NVIDIA_TESLA_P4']")
    }
    get clickNumberofGpus(){
        return $("md-select[placeholder='Number of GPUs']")
    }
    get selectNumberofGpus(){
        return $("md-option[ng-repeat$='gpuType]'][value='1']")
    }
    get clickLocalSSd(){
        return $("md-select[placeholder$='SSD'][ng-model*='ver.ssd']")
    }
    get selectLocalSSd(){
        return $("md-option[ng-repeat*='Ssd.com'][value='2']")
    }
    get clickDataCenterLocation(){
        return $("md-select[placeholder$='tion'][ng-model*='ver.loc']")
    }
    get selectDataCenterLocation(){
        return $("md-option[ng-repeat*='com'][value='europe-west3']")
    }
    get clickDataUsage(){
        return $("md-select[placeholder$='usage'][ng-model*='com']")
    }
    get selectDataUsage(){
        return $("//*[contains(@style,'origin')]//*[contains(text(),'1 Year')]")
    }
    get clickButton(){
        return $("button[ng-disabled*=Com]")
    }
    open(){
        return super.open('https://cloudpricingcalculator.appspot.com/');
    }
}
module.exports=new Calculator