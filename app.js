console.log("Unit Conversions");
let kilometerBtn=document.querySelector(".km");
let meterBtn=document.querySelector(".m");
let centimeterBtn=document.querySelector(".cm");
let millimeterBtn=document.querySelector(".mm");
let mminp=document.getElementById("mminp");
let cminp=document.getElementById("cminp");
let minp=document.getElementById("minp");
let kminp=document.getElementById("kminp");
let result=document.getElementById("result");
millimeterBtn.addEventListener("click",function(){
    let cmToMm=cminp.value*10;
    let mToMm=minp.value*100*10;
    let kmToMm=kminp.value*1000*100*10;
    let mmToMm=mminp.value;
    if(cminp.value){
        result.value=`${cmToMm}mm`;
        minp.value="";
        kminp.value="";
        mminp.value="";
    }
    else if(minp.value){
        result.value=`${mToMm}mm`;
        cminp.value="";
        kminp.value="";
        mminp.value="";
    }
    else if(kminp.value){
        result.value=`${kmToMm}mm`;
        minp.value="";
        cminp.value="";
        mminp.value="";
    }
    else if(mminp.value){
        result.value=`${mmToMm}mm`;
        minp.value="";
        cminp.value="";
        kminp.value="";
    }
});
centimeterBtn.addEventListener("click",function(){
    let mmToCm=mminp.value/10;
    let mToCm=minp.value*100;
    let kmToCm=kminp.value*1000*100;
    let cmToCm=cminp.value;
    if(mminp.value){
        result.value=`${mmToCm}cm`;
        minp.value="";
        kminp.value="";
        cminp.value="";
    }
    else if(minp.value){
        result.value=`${mToCm}cm`;
        mminp.value="";
        kminp.value="";
        cminp.value="";
    }
    else if(kminp.value){
        result.value=`${kmToCm}cm`;
        minp.value="";
        cminp.value="";
        mminp.value="";
    }
    else if(cminp.value){
        result.value=`${cmToCm}cm`;
        minp.value="";
        mminp.value="";
        kminp.value="";
    }
});
meterBtn.addEventListener("click",function(){
    let mmToM=mminp.value/1000;
    let cmToM=cminp.value/100;
    let kmToM=kminp.value*1000;
    let mToM=minp.value;
    if(mminp.value){
        result.value=`${mmToM}m`;
        cminp.value="";
        kminp.value="";
        minp.value="";
    }
    else if(cminp.value){
        result.value=`${cmToM}m`;
        mminp.value="";
        kminp.value="";
        minp.value="";
    }
    else if(kminp.value){
        result.value=`${kmToM}m`;
        cminp.value="";
        mminp.value="";
        minp.value="";
    }
    else if(minp.value){
        result.value=`${mToM}m`;
        cminp.value="";
        mminp.value="";
        kminp.value="";
    }
});
kilometerBtn.addEventListener("click",function(){
    let mmToKm=mminp.value/1000000;
    let cmToKm=cminp.value/100000;
    let mToKm=minp.value/1000;
    let kmToKm=kminp.value;
    if(mminp.value){
        result.value=`${mmToKm}km`;
        cminp.value="";
        minp.value="";
        kminp.value="";
    }
    else if(cminp.value){
        result.value=`${cmToKm}km`;
        mminp.value="";
        kminp.value="";
        minp.value="";
    }
    else if(kminp.value){
        result.value=`${kmToKm}km`;
        cminp.value="";
        mminp.value="";
        minp.value="";
    }
    else if(minp.value){
        result.value=`${mToKm}km`;
        cminp.value="";
        mminp.value="";
        kminp.value="";
    }
});
