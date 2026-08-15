document.addEventListener("DOMContentLoaded", () => {

    const filterButtons =
        document.querySelectorAll(".gallery-filter-btn");

    const galleryItems =
        document.querySelectorAll(".full-gallery-item");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter =
                button.dataset.filter;


            /* ACTIVE BUTTON */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            /* FILTER ITEMS */

            galleryItems.forEach(item => {

                const category =
                    item.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

});