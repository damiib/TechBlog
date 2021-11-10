const postId = document.querySelector('input[name="postId"]').value;

const editHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector("#Title").value.trim();
  const postBody = document.querySelector("#Content").value.trim();

  if (postTitle && postBody) {
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ postTitle, postBody }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert();
    }
  }
};

const deletePost = async()=> {
  await fetch(`/api/post/${postId}`,{
    method: "DELETE" 
  });
  document.location.replace("/dashboard")
}

document.querySelector("#edit").addEventListener("submit", editHandler);
