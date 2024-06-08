document.getElementById('signInBtn').onclick = function() {
    document.getElementById('signInModal').style.display = 'block';
};

document.getElementById('signUpBtn').onclick = function() {
    document.getElementById('signUpModal').style.display = 'block';
};

document.getElementById('allPostsBtn').onclick = function() {
    window.location.href = 'bloglist.html';
};

document.getElementById('createPostBtn').onclick = function() {
    document.getElementById('createPostModal').style.display = 'block';
};

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        closeBtn.closest('.modal').style.display = 'none';
    };
});

document.getElementById('switchToSignUp').onclick = function(event) {
    event.preventDefault();
    document.getElementById('signInModal').style.display = 'none';
    document.getElementById('signUpModal').style.display = 'block';
};

document.getElementById('signUpSubmit').onclick = function() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !username || !password || !confirmPassword) {
        alert('Please fill out this field.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    alert('Signed up successfully!');
};

document.getElementById('signInSubmit').onclick = function() {
    const username = document.getElementById('signInUsername').value;
    const password = document.getElementById('signInPassword').value;

    if (!username || !password) {
        alert('Please fill out this field.');
        return;
    }
    alert('Signed in successfully!');
};

document.getElementById('createPostSubmit').onclick = function() {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    if (!title || !content) {
        alert('Please fill out this field.');
        return;
    }
    alert('Post created successfully!');
};
