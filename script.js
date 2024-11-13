let buttons=document.getElementsByTagName('button');
let result=document.getElementById('result');
console.log(result)
console.log(buttons)
function updateDisplay(input)
{
    let currentdisplay=result.innerText;
    if(currentdisplay==0)
    {
        if(input !='DEL' && input!='=' && input!='C')
        {
            result.innerText=""
            result.innerText=input
        }
    }
    else{
        if(input=="DEL")
        {
            result.innerText=currentdisplay.substring(0,currentdisplay.length-1);
            if(result.innerText=="")
            {
                result.innerText="0";
            }
        }
        else if(input=="C")
        {
            result.innerText=0;
        }
        else if(input !='DEL' && input!='=' && input!='C')
            {
                result.innerText+=input
            }
        else if(input=="=")
        {
            let display=result.innerText;
            result.innerText=eval(display);
        }
        
    }

}