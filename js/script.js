(function () {
    const btnVolta = document.getElementById("btn_volta");
    const menuSobre = document.querySelector(".header-menu a[href='index.html#sobre']");
    let positions_sobre;

    function funcaoVolta() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    btnVolta.addEventListener("click", funcaoVolta);

    window.addEventListener("scroll", function pegaPosition() {
        positions_sobre = menuSobre.getBoundingClientRect().top;


        if (positions_sobre <= -1000) {
            btnVolta.style.opacity = "1"

        }
        else {
            btnVolta.style.opacity = "0"
        }
    });
})();
