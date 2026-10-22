function displayPosts(posts) { 
   const postlist = document.getElementById("post-list");

   posts.forEach((post) => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.append(h1, p);
    postlist.appendChild(li);
  });
}

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("Response:", response);

    const posts = await response.json();
    console.log("Posts:", posts);
    console.log("Number of posts:", posts.length);
    
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
fetchPosts();
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(json => console.log(json))

