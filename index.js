const btn = document.querySelector("#calc");
const joeAge = document.querySelector("#joe-age");
const camAge = document.querySelector("input");

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// const rotateImage = async () => {
//     const img = document.querySelector("img");
//     let i = 0
//     while (true) 
//     {
//         await sleep(10);
//         const xform = "rotate(" + i + "deg)"
//         img.style.transform = xform;
//         i = i >= 360 ? 0 : i+0.75;

//     }
// }


// rotateImage();
const img = document.querySelector("img");
anime({targets: img, rotate: 360, duration: 3500, loop: true, easing: 'linear'});

btn.addEventListener("click", () => {
    const joeDiv = document.querySelector("#joe-container");
    joeAge.innerHTML = camAge.value - 1;
    joeDiv.style.display = 'block';
    var myAnimation = anime({
        targets: ['#joe-container'],
        translateX: '13rem',
        rotate: 360,
        duration: 2000,
        direction: 'alternate',
        easing: 'easeInOutExpo'
    });
    anime({
        targets: joeAge,
        innerHTML: [camAge.value-50, camAge.value+50, camAge.value-1],
        duration: 3000,
        easing: 'linear',
        round: 1
    });
    const img = document.querySelector("img");
    anime({targets: img,
           opacity: [1, 0],
           duration: 2000,
           easing: 'linear',
           complete: () => {
               img.src = "./joe.JPG";
               anime({targets: img,
                      opacity: [0, 1],
                      duration: 3000,
                      easing: 'linear'});
               const btns = document.querySelector("#btns");
               btns.innerHTML = btns.innerHTML + "\n<button id='reset' class='d-inline-flex align-items-center btn btn-outline-secondary btn-lg px-4 rounded-pill' type='button'>Reset</button>";
               const reset = document.querySelector("#reset");
               reset.addEventListener("click", () => {
                   window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D", '_blank').focus();
                   
               });

           }});
    
});
