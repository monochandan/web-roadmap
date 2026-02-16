// random image select
const images = [
    "./image/trier-anime.jpg",
    "./image/trier-evening.webp",
]

function showRandomImage(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const hero = document.getElementById("id-hero");
    // document.getElementById("id-hero").src = randomImage
    hero.style.backgroundImage = `url("${randomImage}")`;
}

setTimeout(showRandomImage, 2000);