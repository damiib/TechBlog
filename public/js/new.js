const newPost = async function(event){
event.preventDefault();

const postTitle = document.querySelector('input[name="Title"]').value;

const postBody=document.querySelector('textarea[name="Content"]').value;
if (postTitle && postBody) {
      
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ postTitle, postBody }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/new');
      } else {
        alert('Failed to delete project');
      }
    }
  
};

document
.querySelector('#new')
.addEventListener('submit', newHandler);