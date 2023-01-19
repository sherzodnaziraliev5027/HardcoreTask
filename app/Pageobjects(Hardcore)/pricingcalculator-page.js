const Page=require("./page");

class Calculator extends Page{
    get numberOfInstances(){
        return $('//div/div[1]/form/div[1]/div[1]/md-input-container/input');
    }
    get instancesfor(){
        return $('//div/div[1]/form/div[2]/div[1]/md-input-container/input');
    }
    get clickSelection(){
        return $('//div/div[1]/form/div[6]/div[1]/md-input-container/md-select/md-select-value')
    }
    get selectN1(){
        return $('//div[3]/md-select-menu/md-content/md-option[1]')
    }
    get clickselectionN1Standart(){
        return $("//md-card/md-card-content/div/div[1]//div[7]/div[1]/md-input-container/md-select/md-select-value")
    }
    get selectN1Standart8GbGpu(){
        return $('//md-optgroup[3]/md-option[4]')
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
        return $("//body/div[6]/md-select-menu/md-content/md-option[2]")
    }
    get clickLocalSSd(){
        return $("//form/div[15]/div[1]/md-input-container/md-select/md-select-value")
    }
    get selectLocalSSd(){
        return $("/html/body/div[7]/md-select-menu/md-content/md-option[3]")
    }
    get clickDataCenterLocation(){
        return $("//form/div[16]/div[1]/md-input-container/md-select/md-select-value")
    }
    get selectDataCenterLocation(){
        return $("/html/body/div[8]/md-select-menu/md-content/md-optgroup/md-option[12]")
    }
    get clickDataUsage(){
        return $("//form/div[19]/div[1]/md-input-container/md-select/md-select-value")
    }
    get selectDataUsage(){
        return $("/html/body/div[9]/md-select-menu/md-content/md-option[2]")
    }
    get clickButton(){
        return $("button[ng-disabled*=Com]")
    }
    open(){
        return super.open('https://cloudpricingcalculator.appspot.com/');
    }
}
module.exports=new Calculator