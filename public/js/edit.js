const postId = document.querySelector('input[name="postId"]').value;

const editHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="postTitle"]').value.trim();
  const body = document.querySelector('textarea[name="postBody"]').value.trim();

 
   await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
  
    document.location.replace("/dashboard")
};

const deletePost = async()=> {
  await fetch(`/api/post/${postId}`,{
    method: "DELETE" 
  });
  document.location.replace("/dashboard")
}

document.querySelector("#edit").addEventListener("submit", editHandler);
document.querySelector("#deleteBtn").addEventListener("click", deletePost)

