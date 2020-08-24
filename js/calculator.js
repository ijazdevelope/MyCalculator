let getValue = document.querySelector('.theme-switch input[type="checkbox"]');
// console.log(getValue)
getValue.addEventListener('change', switchTheme)
function switchTheme(e){
    console.log(e)
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}
//////////////////////////////////////////////////
var btn = document.querySelectorAll('.footer div .symbol');
// btn.addEventListener('click', clicked)
// function clicked(){
//     console.log('clicked')
// }
// console.log(btn)
let input = document.getElementById('input');
let output = document.getElementById('output')

function calculate(data){
    // console.log(data)
    // input.innerHTML += data;
    switch(data){
        case 'ac':
        input.innerHTML=''
        output.innerHTML= 0
        break;
        case 'c':
        input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length -1)
        // output.innerHTML = math.eval(input.innerHTML)
        break;
        case '=':
            output.innerHTML = eval(input.innerHTML)
            break;
        default:
            input.innerHTML +=data;
    }
}
///////////////////////////////
// var button = document.getElementById('btn')
// button.addEventListener('click', function(e){
//     var audio = document.querySelector(`audio [data-key="${e.keyCode}"]`)
//     audio.play();
    // console.log(audio)
// })