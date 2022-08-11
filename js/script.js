const photoArr = [  ["Aisle.png", "[Aisle]", "HTML5 / CSS / (publish)", "publish", " https://ryouhowon.github.io/Aisle/"],
["geographic.png", "[NATIONALGEOGRAPHIC]", "HTML5 / CSS / (publish)", "publish", "https://hyunjun1027.github.io/ngeo_2022/"],
["CASHMERE.png", "[CASHMERE]", "HTML5 / CSS / (publish)", "publish", "https://hyunjun1027.github.io/cashmere/"],
["Origin.png", "[Origin]", "HTML5 / CSS / (publish)", "publish", "https://hyunjun1027.github.io/origin/"],
["FilmMakers.png", "[Filmmakers]", "HTML5 / CSS / Jquery / (publish)", "publish", "https://hyunjun1027.github.io/filmmakers/"],
["Kuliner.png", "[kuliner]", "HTML5 / CSS / (publish)", "publish", "https://hyunjun1027.github.io/kuliner/"],
["sejong.png", "[Sejong]", "HTML5 / CSS / (publish)", "publish", "https://hyunjun1027.github.io/sejong/"],
["Oclass.png", "[oclass]", "HTML5 / CSS / Jquery / Javacaript / PHP (publish)", "publish", "https://hyunjun1027.github.io/oclass/"],
["Cakecious.png", "[Cakecious]", "HTML5 / CSS / (publish)", "publish", "https://hyunjun1027.github.io/cakecious/"],
["nu'bella.png", "[NU'BELLA]", "HTML5 / CSS / Javacaript / (develop)", "develop", "https://hyunjun1027.github.io/nu-bella/"],
];

const sectionSpace = document.querySelector("#grid_system");
let sectionCont = "";

for(v of photoArr){
    sectionCont += `
        <article class = "${v[3]}">
            <div class="photo">
                <img src="./img/${v[0]}" alt="">
                <h3>${v[1]}</h3>
                <p>${v[2]}</p>
                <a href="${v[4]}">Detail_view</a>
            </div>
        </article>
    ` 
}

sectionSpace.innerHTML = sectionCont;

let grid;
const timeOut = setTimeout(() => {
    grid = new Isotope("#grid_system", {
        itemSelector : "article",
        transitionDuration : "0.5s"
    });
}, 500);


const sortBtns = document.querySelectorAll(".sort_btn li");
console.log(sortBtns);

for(v of sortBtns){
    v.addEventListener("click", (e) => {
        e.preventDefault();
        const dataSort = e.currentTarget.querySelector("a").getAttribute("data-sort");
        grid.arrange({
            filter : dataSort
        });

       
        for(v of sortBtns){
            v.classList.remove("active");
        }

        e.currentTarget.classList.add("active");

    });  
}

const $arrow = document.querySelector("header span");
const $header = document.querySelector("header");
console.log($arrow);

$arrow.addEventListener("click", () => {
    const isActive = $header.closest("header").classList.contains("active");
    if(!isActive){
        $arrow.closest("header").classList.add("active");
    }else{
        $arrow.closest("header").classList.remove("active");
    }

    
});
