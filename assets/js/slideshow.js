let images = document.querySelectorAll("img");
const slide = document.getElementById("slide"),
    close = document.getElementById("close");

images.forEach((image) => {
    image.addEventListener('click', (ev) => {
        let imageShow = ev.currentTarget.src,
            imgSlide = document.querySelector("#slide img");

        slide.style.display = "flex";
        imgSlide.src = `${imageShow}`;

        close.addEventListener('click', () =>{
            slide.style.display = "none";
        })
    })
})
