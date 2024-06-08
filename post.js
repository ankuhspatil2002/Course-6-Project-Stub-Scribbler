document.addEventListener('DOMContentLoaded', function() {
    const editBtn = document.getElementById('editBtn');
    const likeBtn = document.getElementById('likeBtn');
    const commentBtn = document.getElementById('commentBtn');
    const postTitle = document.getElementById('postTitle');
    const postContent = document.getElementById('postContent');
    const likeStatus = document.getElementById('likeStatus');
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('commentsContainer');
    
    let likeCount = 0;
    let isEditing = false;

    // Toggle Edit/Save mode
    editBtn.addEventListener('click', function() {
        if (isEditing) {
            postTitle.contentEditable = "false";
            postContent.contentEditable = "false";
            postTitle.classList.remove('editable');
            postContent.classList.remove('editable');
            editBtn.innerHTML = 'Edit <i class="fas fa-edit"></i>';
        } else {
            postTitle.contentEditable = "true";
            postContent.contentEditable = "true";
            postTitle.classList.add('editable');
            postContent.classList.add('editable');
            editBtn.innerHTML = 'Save <i class="fas fa-save"></i>';
        }
        isEditing = !isEditing;
    });

    // Like button functionality
    likeBtn.addEventListener('click', function() {
        likeCount++;
        likeStatus.innerText = `${likeCount} person${likeCount > 1 ? 's' : ''} like${likeCount > 1 ? '' : 's'} this!`;
        likeBtn.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked!';
    });

    // Comment button functionality
    commentBtn.addEventListener('click', function() {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerText = commentText;
            commentsContainer.insertBefore(commentElement, commentsContainer.firstChild);
            commentInput.value = '';
        }
    });
});
