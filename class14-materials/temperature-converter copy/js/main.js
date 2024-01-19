//Write your pseduo code first! 
//get the temp 
document.querySelector('#result').addEventListener('click', convert)

//convert the temp
function convert(){
    let num = document.querySelector('#temp').value 
    num = num * 9/5 + 32

    document.querySelector('#display').innerText = num 
}

//show new temp