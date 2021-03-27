// 27-March-2021

const main_button = document.getElementById('main_button');

// ui 
const welcome = document.getElementById('welcome');
const currentCome = document.getElementById('currentCome');
const currentGone = document.getElementById('currentGone');

const battery = document.getElementsByClassName('battery_container');
const sound = document.getElementsByClassName('sound_container');

const audioTag = document.getElementById('audio');

const audioJs = new Audio();
audioJs.setAttribute('src', '../audio/double-beep-beep.mp3');

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

        // Component Visibility |>>> >>> >>> >>> Hide
        welcome.style.display = 'none';
        currentCome.style.display = 'block';
        currentGone.style.display = 'none';

        battery[0].style.display = 'none';
        sound[0].style.display = 'none';

        // audio Object
        audioJs.pause();
        audioJs.loop = false;

    } else {
        // current ==> gone...
        main_button.innerText = 'ON';
        main_button.style.backgroundColor = "green";
        display_output.style.backgroundColor = 'gray';

        // Component Visibility |>>> >>> >>> >>> Show
        currentCome.style.display = 'none';
        currentGone.style.display = 'block';

        battery[0].style.display = 'block';
        sound[0].style.display = 'block';

        // audio Object
        audioJs.play();
        //audioJs.loop = true;
    }

})