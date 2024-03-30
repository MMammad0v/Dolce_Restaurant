$(document).ready(() => {
  $("#owl-example").owlCarousel({
    items: 4,
    slideSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
    },
  });
});

const subscribeEmail = $("#subscribe-email");
const sendSubmit = (event) => {
  event.preventDefault();

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mammadovm258@gmail.com",
    Password: "4038989B550673393FD6CD00DE00BB2F56F2",
    To: "mammadovm258@gmail.com",
    From: "mammadovm258@gmail.com",
    Subject: "Subscribe from Restaurant",
    Body: `Email: ${subscribeEmail.value}`,
  }).then((message) => {
    alert(message);
    subscribeEmail.value = "";
  });
};

// Contact Us
let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactMessage = document.getElementById("contact-message");

const sendContactForm = (e) => {
  e.preventDefault();

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mammadovm258@gmail.com",
    Password: "4038989B550673393FD6CD00DE00BB2F56F2",
    To: "mammadovm258@gmail.com",
    From: "mammadovm258@gmail.com",
    Subject: "Subscribe from Restaurant",
    Body: `
    Name: ${contactName.value}
    <br>
    Email: ${contactEmail.value}
    <br>
    Message: ${contactMessage.value}
    `,
  }).then((message) => {
    alert(message);
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  });
};
