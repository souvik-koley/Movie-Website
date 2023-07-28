let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})

let json_url = "movie.json";

fetch(json_url).then(Response => Response.json()).then((data) => {
    data.forEach((element, i) => {
        let { name, imdb, date, sposter, bposter, genre, url } = element;
        let card = document.createElement('a');
        card.classList.add("card");
        card.href = `${url}`;
        card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster" />
        <div class="rest_card">
            <img src="${bposter}" alt="" />
            <div class="cont">
            <h4>${name}</h4>
            <div class="sub">
                <p>${genre}, ${date}</p>
                <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
            </div>
            </div>
        </div>
        `
        cards.appendChild(card);
    });

    // document.getElementById('title').innerText = data[0].name;
    // document.getElementById('gen').innerText = data[0].genre;
    // document.getElementById('date').innerText = data[0].date;
    // document.getElementById('rate').innerHTML = `
    // <span>IMDB</span><i class="bi bi-star-fill"></i> ${data[0].imdb}
    // `

    //search data load
    data.forEach((element, i) => {
        let { name, imdb, date, sposter, genre, url } = element;
        let card = document.createElement('a');
        card.classList.add("card");
        card.href = `${url}`;
        card.innerHTML = `
        <img src="${sposter}" alt="" />
        <div class="cont">
        <h3>${name}</h3>
        <p>
            ${genre}, ${date}, <span>IMDB</span
            ><i class="bi bi-star-fill"></i> ${imdb}
        </p>
        </div>
        `
        search.appendChild(card);
    })

    //seach filter
    search_input.addEventListener('keyup', () => {
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');
        for (let i = 0; i < a.length; i++) {
            let b = a[i].getElementsByClassName('cont')[0];
            let TextValue = b.textContent || b.innerText;
            if (TextValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "flex";
                search.style.visibility = "visible";
                search.style.opacity = 1;
            } else {
                a[i].style.display = "none";
            }
            if (search_input.value == 0) {
                search.style.visibility = "hidden";
                search.style.opacity = 0;
            }
        }
    });

    let video = document.getElementsByTagName('video')[0];
    let play = document.getElementById('play');

    play.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            play.innerHTML = `Pause <i class="bi bi-pause-fill"></i>`
        } else {
            play.innerHTML = `Watch <i class="bi bi-play-fill"></i>`
            video.pause();
        }
    })
    //Series filter
    let series = document.getElementById('series');
    series.addEventListener('click', () => {
        cards.innerHTML = "";
        let series_array = data.filter((element) => {
            return element.type === "series";
        });

        series_array.forEach((element, i) => {
            let { name, imdb, date, sposter, bposter, genre, url } = element;
            let card = document.createElement('a');
            card.classList.add("card");
            card.href = `${url}`;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster" />
            <div class="rest_card">
                <img src="${bposter}" alt="" />
                <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre}, ${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                </div>
                </div>
            </div>
            `
            cards.appendChild(card);
        });
    });

    //Movies filter
    let movies = document.getElementById('movies');
    movies.addEventListener('click', () => {
        cards.innerHTML = "";
        let movies_array = data.filter((element) => {
            return element.type === "movie";
        });

        movies_array.forEach((element, i) => {
            let { name, imdb, date, sposter, bposter, genre, url } = element;
            let card = document.createElement('a');
            card.classList.add("card");
            card.href = `${url}`;
            card.innerHTML = `
                <img src="${sposter}" alt="${name}" class="poster" />
                <div class="rest_card">
                    <img src="${bposter}" alt="" />
                    <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                    </div>
                    </div>
                </div>
                `
            cards.appendChild(card);
        });
    });

        //Kids filter
        let kids = document.getElementById('kids');
        kids.addEventListener('click', () => {
            cards.innerHTML = "";
            let kids_array = data.filter((element) => {
                return element.type === "kid";
            });
    
            kids_array.forEach((element, i) => {
                let { name, imdb, date, sposter, bposter, genre, url } = element;
                let card = document.createElement('a');
                card.classList.add("card");
                card.href = `${url}`;
                card.innerHTML = `
                    <img src="${sposter}" alt="${name}" class="poster" />
                    <div class="rest_card">
                        <img src="${bposter}" alt="" />
                        <div class="cont">
                        <h4>${name}</h4>
                        <div class="sub">
                            <p>${genre}, ${date}</p>
                            <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                        </div>
                        </div>
                    </div>
                    `
                cards.appendChild(card);
            });
        });
});