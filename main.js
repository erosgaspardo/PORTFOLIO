const imgNames = document.querySelectorAll(".img-name");
const imgPreviewContainer = document.querySelector(".img-preview-container");
const imgViewContainer = document.querySelector(".img-modal .img-view");
const closeBtn = document.querySelector(".close-btn");
const modalName = document.querySelector(".modal-name");
const tl = gsap.timeline({ paused: true });


imgNames.forEach((imgName) => {
    imgName.addEventListener("mouseover", () => {
        const dataImg = imgName.getAttribute("data-img");
        const imgElement = document.createElement("img");
        imgElement.src = `./img/${dataImg}.jpg`;
        imgElement.alt = "";
        imgElement.classList.add("fade-in");

        // Add the image to the container with the fade-in effect
        imgPreviewContainer.innerHTML = "";
        imgPreviewContainer.appendChild(imgElement);

        // Adding the 'show' class triggers the fade-in effect
        setTimeout(() => {
            imgElement.classList.add("show");
        }, 10); // A small delay to ensure the transition is applied smoothly

    });

});


gsap.from('.name', {
    autoAlpha: 0,
    duration: 2,
    y: 300,    
    stagger: 0.2,
    opacity: 0,
    ease: "power3.inOut"
}) 

gsap.from('.img-preview', {
    opacity: 0,
    duration: 0.8,
    delay: 2,
    opacity: 0,
    ease: "power3.inOut"
})
gsap.from('.grid', {
    opacity: 0,
    duration: 1,
    delay: 1,
    opacity: 0,
    ease: "power3.inOut"
})

gsap.from('.nav-item', {
    duration: 1.5,  
    opacity: 0,
    y: -200,
    stagger: -0.2,
    ease: "power3.inOut"
}) 

gsap.from('#displayedImage', {
    autoAlpha: 0,
    duration: 2,  
    opacity: 1,
    ease: "power3.inOut"
}) 

gsap.from('.notshow', {
    visibility: 0,
    autoAlpha: 0,
    opacity: 0,
})

gsap.from('.bottom-info', {
  autoAlpha: 0,
  duration: 2,
  y: 300,    
  stagger: 0.2,
  opacity: 0,
  ease: "power3.inOut"
})

gsap.from('.background', {
    autoAlpha: 0,
    duration: 1.5,
    delay: 1,
    ease: "power3.inOut"
})