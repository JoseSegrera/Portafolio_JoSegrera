/*NAV CAMBIA COLOR*/
$(window).scroll(function(){
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
    } else {
        $("nav").removeClass("black");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remover clase 'active' de todos los enlaces
            navLinks.forEach((link) => link.classList.remove("active"));
            
            // Añadir clase 'active' al enlace correspondiente
            const id = entry.target.getAttribute("id");
            const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
            activeLink.classList.add("active");
          }
        });
      },
      { threshold: 0.6 } // Cambiar el umbral si es necesario
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });