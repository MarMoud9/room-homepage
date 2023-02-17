var data = [
    slide_1 = {
        image : "images/desktop-image-hero-1.jpg",
        title : "Discover inovative ways to decorate",
        text : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    slide_2 =  {
        image : "images/desktop-image-hero-2.jpg",
        title : "We are availble all across the globe",
        text : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    slide_3 = {
        image : "images/desktop-image-hero-3.jpg",
        title : "Manufactured with best materials",
        text : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]
var image = document.querySelector(".slider-image")
var title = document.querySelector("#title");
var text  = document.querySelector("#text")
var index = 0;
const fadeAnim = [
    { opacity : "1"},
    {opacity : "0"},
    { opacity : "1"}
]
const fadeAnimeOptions  ={
    duration : 2000,
    iterations : 1,
}
function slide(a){
    index = index +  a
    document.querySelector(".slider-image").animate(fadeAnim, fadeAnimeOptions)
    title.animate(fadeAnim, fadeAnimeOptions)
    text.animate(fadeAnim, fadeAnimeOptions)
    if (index > data.length -1){
        index = 0;
    } else if ( index < 0 ){
        index = data.length -1
    }
    setTimeout(() => {
        image.style.backgroundImage = `url(${data[index].image})`
        title.textContent = data[index].title
        text.textContent = data[index].text
    }, 1000);
    
}