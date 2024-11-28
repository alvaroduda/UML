const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = "🌕 Modo Claro";
    } else {
        darkModeToggle.innerHTML = "🌙 Modo Escuro";
    }
});

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const selectedOption = document.querySelector('input[name="helped"]:checked');

    if (selectedOption) {
        if (selectedOption.value === "yes") {
            alert("Obrigado, me da uma estrela no Gihub 🙏!");
        } else {
            alert("Se você não gostou o problema é você, me da uma estrela no Gihub 🙏!");
        }

        window.open("https://github.com/alvaroduda/UML", "_blank");
    } else {
        alert("Selecione uma resposta!");
    }
});
