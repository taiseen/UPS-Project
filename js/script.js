// 27-March-2021

const main_button = document.getElementById('main_button');

// ui 
const welcome = document.getElementById('welcome');
const currentCome = document.getElementById('currentCome');
const currentGone = document.getElementById('currentGone');

const battery = document.getElementsByClassName('battery_container');
const sound = document.getElementsByClassName('sound_container');

// Play Pause Buttons
const play = document.getElementById('play');
const pause = document.getElementById('pause');

const audio = new Audio('../audio/double_beep.mp3');

let current = false;

main_button.addEventListener('click', () => {

    current = current ? false : true;
    //console.log(current);

    if (current) {
        // current ==> come...
        main_button.innerText = 'OFF';
        main_button.style.color = "white";
        main_button.style.backgroundColor = "red";
        display_output.style.backgroundColor = 'white';
        display_output.style.boxShadow = 'inset 0 0 100px 10px rgba(110, 213, 208, 0.5)'
        


        // Component Visibility |>>> >>> >>> >>> Hide
        welcome.style.display = 'none';
        currentCome.style.display = 'block';
        currentGone.style.display = 'none';

        battery[0].style.display = 'none';
        sound[0].style.display = 'none';

        // audio Object | with controller
        audio.loop = false;
        play.style.display = 'none';
        play.addEventListener("click", ()=>{
            audio.play();
            pause.style.display = 'block';
            play.style.display = 'none';
        })

    } else {
        // current ==> gone...
        main_button.innerText = 'ON';
        main_button.style.backgroundColor = "green";
        display_output.style.backgroundColor = 'gray';
        display_output.style.boxShadow = 'none'
       

        // Component Visibility |>>> >>> >>> >>> Show
        currentCome.style.display = 'none';
        currentGone.style.display = 'block';

        battery[0].style.display = 'block';
        sound[0].style.display = 'block';

        // audio Object | with controller
        audio.play();
        audio.loop = true;
        pause.style.display = 'block';
        pause.addEventListener("click", ()=>{
            audio.pause();
            play.style.display = 'block';  
            pause.style.display = 'none';          
        })
    }

    
});

window.addEventListener('load', ()=>{
    play.addEventListener('click', ()=>{})
})