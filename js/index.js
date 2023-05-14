
function Icon() {
    let iconToggle = document.querySelector('.nav-links');
    // let toggleLogo = document.querySelector('#actionToggle');
    if (iconToggle.style.display == "none") {
        iconToggle.style.display = "block"
    }else{
        iconToggle.style.display = "none"
    }
    console.log(iconToggle)
}
function Statecome(){
    let wordCounter = document.getElementById('mainTxt');
    let mainCount = wordCounter.value.length;
    let counter = wordCounter.value;
    alert(`You have entered ${mainCount} words in the input`)
    alert(` Conform this is the message you want to submit?? 
    ${counter}`)
    console.log(wordCounter);
    console.log(mainCount);
}

