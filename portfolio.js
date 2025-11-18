$(document).ready(function(){

    // Hamburger menu
    $(".hamburger").click(function(){
        $(".menu").slideToggle();
    });

    // Typing animation
    const text = [
        "I am an IT student.",
        "I love learning new things.",
        "I build cool projects.",
        "Welcome to my portfolio!"
    ];

    let index = 0;
    let charIndex = 0;

    function type() {
        let currentText = text[index];
        $("#typed").text(currentText.substring(0, charIndex));

        charIndex++;

        if (charIndex > currentText.length) {
            charIndex = 0;
            index = (index + 1) % text.length;
            setTimeout(type, 1000);
        } else {
            setTimeout(type, 80);
        }
    }

    type();
});
