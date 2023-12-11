document.addEventListener("DOMContentLoaded", function() {
    // Function to add animation class to an element
    function animate(element, animation) {
      element.classList.add("animate__animated", "animate__" + animation);
    }

    // Function to handle scrolling animations
    function handleScrollAnimations() {
      var elements = document.querySelectorAll("[data-aos]");
      elements.forEach(function(element) {
        var animation = element.getAttribute("data-aos");
        var offset = element.getAttribute("data-aos-offset") || 0;
        var rect = element.getBoundingClientRect();
        var isVisible = rect.top - offset < window.innerHeight;
        
        if (isVisible) {
          animate(element, animation);
        }
      });
    }

    // Handle scroll animations on initial load
    handleScrollAnimations();

    // Attach event listener for scroll animations
    window.addEventListener("scroll", handleScrollAnimations);
});