document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;


    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        // Get form values

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const furniture =
            document.getElementById("furniture").value;

        const message =
            document.getElementById("message").value.trim();


        // Basic validation

        if (!name || !phone || !message) {

            alert("Please fill in all required fields.");

            return;
        }


        // Display name for furniture type

        let furnitureName = "Not specified";

        if (furniture === "sofa") {
            furnitureName = "Sofa";
        }

        else if (furniture === "dining") {
            furnitureName = "Dining Furniture";
        }

        else if (furniture === "custom") {
            furnitureName = "Custom Furniture";
        }

        else if (furniture === "other") {
            furnitureName = "Other";
        }


        // Client's WhatsApp number
        // Replace this later with the REAL number.

        const businessWhatsApp = "919310597196";


        // Create WhatsApp message

        const whatsappMessage =
`Hello! I found your website and would like to make an enquiry.

Name: ${name}

Phone: ${phone}

Looking for: ${furnitureName}

Requirements:
${message}

Please let me know about the next steps. Thank you!`;


        // Encode message for URL

        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        // WhatsApp URL

        const whatsappURL =
            `https://wa.me/${businessWhatsApp}?text=${encodedMessage}`;


        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank"
        );

    });

});