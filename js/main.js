document.addEventListener("DOMContentLoaded", () => {

    const isInsidePagesFolder =
        window.location.pathname.includes("/pages/");

    const componentPath = isInsidePagesFolder
        ? "../components/"
        : "components/";


    loadComponent(
        "navbar",
        componentPath + "navbar.html"
    );

    loadComponent(
        "footer",
        componentPath + "footer.html"
    );

    loadComponent(
        "whatsapp",
        componentPath + "whatsapp-button.html"
    );

});


async function loadComponent(elementId, filePath) {

    const element =
        document.getElementById(elementId);

    if (!element) return;


    try {

        const response =
            await fetch(filePath);


        if (!response.ok) {

            throw new Error(
                `Failed to load ${filePath}`
            );

        }


        element.innerHTML =
            await response.text();


        // Fix navigation paths

        fixNavigationLinks();


    } catch (error) {

        console.error(error);

    }

}


/* ========================================
   FIX COMPONENT NAVIGATION
======================================== */

function fixNavigationLinks() {

    const isInsidePagesFolder =
        window.location.pathname.includes("/pages/");


    if (!isInsidePagesFolder) return;


    /*
        Components contain paths written
        relative to index.html.

        When loaded from /pages/,
        we need to go one level back.
    */


    document
        .querySelectorAll(
            "#navbar a[href], #footer a[href]"
        )
        .forEach(link => {

            const href =
                link.getAttribute("href");


            if (!href) return;


            // Ignore external / special links

            if (
                href.startsWith("http") ||
                href.startsWith("#") ||
                href.startsWith("tel:") ||
                href.startsWith("mailto:")
            ) {
                return;
            }


            // Home

            if (href === "index.html") {

                link.setAttribute(
                    "href",
                    "../index.html"
                );

                return;
            }


            // Other pages

            if (href.startsWith("pages/")) {

                link.setAttribute(
                    "href",
                    "../" + href
                );

            }

        });

}