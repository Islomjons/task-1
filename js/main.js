let elListWrapper = document.querySelector(".hero__list")
let elForm = document.querySelector(".input__form");
let dictionaryApi = "https://api.dictionaryapi.dev/api/v2/entries/en/word";

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let elInputSearch = document.querySelector(".input__search").value;
    
    fetch(`${dictionaryApi}${elInputSearch}`)
    .then(response => response.json())
    .then(data => {
        elListWrapper.innerHTML = `
        <h3 class="word-heading">${elInputSearch} - ${data[0].phonetic || " "}</h3>
        <p class"word-meaning">${data[0].meanings[0].definitions[0].definition[0] || " "}</p>
        <p class"word-example"> <strong></strong> ${data[0].meanings[0].definitions[0].example || " "}</p>
        <p class"word-meading">${data[0].meanings[0].definitions[1].definition || " "}</p>
        <p class"word-example"> <strong></strong> ${data[0].meanings[0].definitions[1].example || " "}</p>
        <p class="word-meaning">${data[0].meanings[0].definitions[2].definition || " "}</p>
        <div class"wrapper__icon"> <button id="player"> <i class="fa-solid fa-play"></i> </button>
        <h3>${elInputSearch || " "}</h3>
        </div>
        `

        let play = document.querySelector(".player__btn");
        function playMusic() {
            let audio = new Audio(`${data[0].phonetics[1].audio}`);
            audio.play();
        }

        play.addEventListener("click", (evt) => {
            evt.preventDefault()

            let Islomjon = "Islomjo n"
            console.log(Islomjon);
        })
    })
})


