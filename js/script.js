/* ==================== COUNT reveal ==================== */



let counters = document.querySelectorAll(".counters span");
let container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
    ){
        counters.forEach(counter => {
            counter.innerText = 0;

            let count = 0;

            function updateCount(){
                const target = parseInt(counter.dataset.count);

                if(count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 30);

                }else{
                    counter.innerText = target;
                                        
                }
            }
            updateCount();
            activated = true;
        });


    }else if(
        pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true

    ) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});



/* ==================== toogle icom mavbar ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/* ==================== scroll section active link ==================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 500;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });

        };

    });
    /* ==================== remove  toggle icon and var wgen click navbar (scroll) ==================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ==================== scroll reveal ==================== */

ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay: 200,
    easing: "ease-out",
    interval:200,
    // reset: true,

});


ScrollReveal().reveal('.home-content, .heading, .btn, .logos, .difusion-img, .display-4, counters');
ScrollReveal().reveal('.home-img, .services-container, .planes-container, .planes p, .planes-spotify, .difusion-container, .consultas-container, .footer');


/* ==================== popUp reveal ==================== */



// Get the modal
var ebModal = document.getElementById('mySizeChartModal');

// Get the button that opens the modal
var ebBtn = document.getElementById("mySizeChart");

// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close")[0];

// When the user clicks the button, open the modal 
ebBtn.onclick = function() {
    ebModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}