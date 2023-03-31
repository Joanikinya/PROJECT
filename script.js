
// The code below executes animation for only one selection.

/*let options = {
    root: null,
    rootMargin: "-250px 0px -150px 0px",
    threshold: 0.019
}

let observer = new IntersectionObserver(beTouching, options);
let selection = document.querySelector(".content1")
observer.observe(selection);
console.log("watching", selection);

function beTouching(entries, observer) { 
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("intersecting");
            entry.target.classList.add('content1-animation');
        } else {
            entry.target.classList.remove('content1-animation');
        }
    });
}*/



//Code to execute animation

const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-animation')
        }
        else {
            entry.target.classList.remove('animation-animation')
        }

    })
},
    {
        threshold: 0.01
    });
//
for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];

    observer.observe(elements);
}

// // A function we want executed based on changes in screen size 
// // function foo() {
// //     if (window.innerWidth < 1024) {
// //         /* whatever you want to do here */
//              const img = document.getElementById('img');
//              img.style.display = 'none';
// //     }
// // }
// // // Set up a listener 
// // window.addEventListener('changesize', foo);

// Scroll to a certain element
document.querySelector('.homeButton').scrollIntoView({
    behavior: 'smooth'
});

