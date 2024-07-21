document.addEventListener('mousemove', function(event) {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    
    const parallaxElements = document.querySelectorAll('#ImgMove');
    parallaxElements.forEach(el => {
        el.style.transform = `translateX(${x * 10}px) translateY(${y * 10}px)`;
    });
});
