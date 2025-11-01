function darkmode() {
    document.body.classList.toggle("darkmode")
}

// Modal Projetos
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.showModal(); 
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.close(); 
    }
}
