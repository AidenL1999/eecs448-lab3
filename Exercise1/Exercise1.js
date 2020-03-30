
document.addEventListener("DOMContentLoaded",() => {
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

document.querySelector("#clickem").addEventListener("click",(e) => {
    console.log('click');
    console.log('input1',input1.value);
    console.log('input2',input2.value);

    
    if(input1.value!=input2.value)
                                                    {
        document.querySelector("#result").innerText =
        "ERROR"
    }
    else if(input1.value.length<7 && input2.value.length<7)
                                                    {
    document.querySelector("#result").innerText =
    "ERROR"
                                                    }
    else {
        document.querySelector("#result").innerText =
        "SUCCESS"
                                                    }})
                          })
