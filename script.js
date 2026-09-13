// =====================================
// MOBILE MENU
// =====================================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const icon = menuIcon.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


// =====================================
// CLOSE MOBILE MENU
// =====================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navLinks) {

            navLinks.classList.remove("show");

        }

        if (menuIcon) {

            const icon =
                menuIcon.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

});


// =====================================
// CONTACT FORM
// =====================================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Thank you for your message! I will get back to you soon."
            );

            contactForm.reset();

        }
    );

}