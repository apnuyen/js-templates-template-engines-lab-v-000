function createPost(){
  var pageTemplateFn=_.template(document.getElementById("page-template").innerHTML);
  var postTemplateFn=_.template(document.getElementById("post-template").innerHTML);
  var commentsTemplateFn=_.template(document.getElementById("comments-template").innerHTML);
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById('postAuthor').value;
  var post = document.getElementById('postText').value;
}

function postComment(){
  
}