const newComment = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = document.querySelector('input[name="post-id"]').value;
  
    if (comment) {
      await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
  document.location.reload();
    }
  };
  
  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newComment);
  