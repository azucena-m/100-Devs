//Write your pseduo code first! 


//get temp

document.querySelector('#result').addEventListener('click', convert)

//convert temp
function convert () {
    // console.log('helllo');
    let num = document.querySelector('#temp').value
    num = num * 9/5 + 32
    document.querySelector('#display').innerText = num
//show the temp
}
