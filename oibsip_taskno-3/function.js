const calculateTemp=()=>{
    const temp=document.getElementById('temp').value;
    if(isNaN(temp)){
        alert("only number is allowed!");
    }
    else{
        const tempmod=document.getElementById('temp_diff');
        let tempmodin=temp_diff.options[tempmod.selectedIndex].value;
        let result;
        const celToFah=(cel)=>{
            let Fahrenheit=Math.round(((cel*9/5)+32)*100)/100;
            return Fahrenheit;
        }
        const fahToCel=(fah)=>{
            let Celcius=Math.round(((fah-32)*5/9)*100)/100;
            return Celcius;
        }
        if(tempmodin=='cel'){
            result=celToFah(temp);
            document.getElementById('resultcontainer').innerHTML=`=${result}° Fahrenheit`;
        }else{
            result=fahToCel(temp);
            document.getElementById('resultcontainer').innerHTML=`=${result}° Celcius`; 
        }
    }

}