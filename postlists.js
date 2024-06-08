document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-post');
    const deleteModal = document.getElementById('deleteModal');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');
    let postToDelete;

    deleteButtons.forEach(button => {
        button.onclick = function() {
            postToDelete = button.closest('.post-card');
            deleteModal.style.display = 'block';
        };
    });

    confirmDelete.onclick = function() {
        if (postToDelete) {
            postToDelete.remove();
            deleteModal.style.display = 'none';
        }
    };

    cancelDelete.onclick = function() {
        deleteModal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == deleteModal) {
            deleteModal.style.display = 'none';
        }
    };
});
