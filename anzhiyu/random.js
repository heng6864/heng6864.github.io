var posts=["2025/02/25/hello-world/","2025/02/25/这是另一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };