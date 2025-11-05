//! Modal Projetos

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

window.addEventListener('click', function (event) {
    const openModals = document.querySelectorAll('dialog[open]');

    openModals.forEach(modal => {
        if (event.target === modal) {
            modal.close();
        }
    })
});