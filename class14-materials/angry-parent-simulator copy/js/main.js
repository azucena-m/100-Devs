document.querySelector('#yell').addEventListener('click', run)

function run(){
  const fname = document.querySelector('#firstName').value 
  const fmiddle = document.querySelector('#firstMiddle').value
  const lmiddle = document.querySelector('#lastMiddle').value
  const lname = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = `${fname} ${fmiddle} ${lmiddle} ${lname}`
}
