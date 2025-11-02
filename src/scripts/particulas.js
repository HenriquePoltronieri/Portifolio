document.addEventListener("mousemove", (e) => {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Tamanho aleatório
    const size = Math.random() * 12 + 4; // entre 4 e 16px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Formato aleatório
    const shapes = ["50%", "0%", "20% 80% 80% 20% / 20% 20% 80% 80%"];
    particle.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];

    // Cor branca com brilho
    particle.style.background = `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)`;

    // Posição
    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;

    // Movimento aleatório
    const moveX = (Math.random() - 0.5) * 100;
    const moveY = (Math.random() - 0.5) * 100;
    particle.animate(
        [
            { transform: `translate(-50%, -50%)`, opacity: 1 },
            { transform: `translate(${moveX}px, ${moveY}px) scale(0)`, opacity: 0 }
        ],
        {
            duration: 1000 + Math.random() * 500,
            easing: "ease-out",
            fill: "forwards"
        }
    );

    document.body.appendChild(particle);

    // Remove após a animação
    setTimeout(() => particle.remove(), 1500);
});