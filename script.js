const carousel = document.getElementById('carousel');

function updateCarousel() {
    const firstImage = carousel.children[0];
    const clone = firstImage.cloneNode(true);
    carousel.appendChild(clone);
    carousel.removeChild(firstImage);
}

setInterval(updateCarousel, 2000); // Auto-rotate every 3 seconds

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "techwebstack@gmail.com",
        Password : "project@123",
        To : 'ayush.pvt26@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("message send success")
    );

    
}