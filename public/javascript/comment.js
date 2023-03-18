async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    console.log(comment_text)
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    // prevents user from submitting empty comments
    if (comment_text) {
        const response = await fetch('/comment', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);