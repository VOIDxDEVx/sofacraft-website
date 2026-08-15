document.addEventListener("DOMContentLoaded", () => {

    const initNavbar = () => {

        const menuToggle =
            document.getElementById("menuToggle");

        const navLinks =
            document.getElementById("navLinks");

        const navbar =
            document.querySelector(".navbar");


        if (!menuToggle || !navLinks || !navbar) {
            return;
        }


        /* ========================================
           MOBILE MENU
        ======================================== */

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        // Close menu after clicking a link

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* ========================================
           SMART SCROLL NAVBAR
        ======================================== */

        let lastScrollY = window.scrollY;

        const scrollThreshold = 8;


        window.addEventListener("scroll", () => {

            const currentScrollY = window.scrollY;

            const difference =
                currentScrollY - lastScrollY;


            // Always show navbar at the top

            if (currentScrollY <= 10) {

                navbar.classList.remove(
                    "navbar-hidden"
                );

                lastScrollY = currentScrollY;

                return;
            }


            // Scrolling DOWN

            if (difference > scrollThreshold) {

                // Don't hide while mobile menu is open

                if (!navLinks.classList.contains("active")) {

                    navbar.classList.add(
                        "navbar-hidden"
                    );

                }

            }


            // Scrolling UP

            else if (difference < -scrollThreshold) {

                navbar.classList.remove(
                    "navbar-hidden"
                );

            }


            lastScrollY = currentScrollY;

        });


        /* ========================================
           RESET ON DESKTOP
        ======================================== */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 700) {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    };


    /* ========================================
       WAIT FOR DYNAMIC NAVBAR
    ======================================== */

    const navbarContainer =
        document.getElementById("navbar");

    if (!navbarContainer) return;


    const observer =
        new MutationObserver(() => {

            if (
                document.getElementById("menuToggle") &&
                document.getElementById("navLinks")
            ) {

                observer.disconnect();

                initNavbar();

            }

        });


    observer.observe(navbarContainer, {
        childList: true,
        subtree: true
    });

});