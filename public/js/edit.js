const editHandler = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector('#Title').value.trim();
    const postBody = document.querySelector('#Content').value.trim();

    if (postTitle && postBody){
        const response = await fetch('/api/users', {
            method: 'Edit',
            body: JSON.stringify({ postTitle, postBody }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            document.location.replace('/edit');
          } else {
            alert('Failed to create project');
          }
          document
          .querySelector('#edit')
          .addEventListener('submit', editHandler);
    }









};