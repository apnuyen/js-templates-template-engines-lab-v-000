function createPost(){
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById('postAuthor').value;
  var post = document.getElementById('postBody').value;

  document.getElementByTag("main")[0].innerHTML += pageTEmplateFn();

  var TemplateHTML = postTemplateFn({'title': postTitle, 'body': post, 'poster': postAuthor});
  var postElement = document.getElementById("post")

  postElement.innerHTML = templateHTML;
  postElement.getElementsByTag("footer")[0].innerHTML = commentsTemplateFn();
}

function postComment(){
  var commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);
  var commentText=document.getElementById("commentText").value;
  var commenterName=document.getElementById("commenterName").value;
  var commentsSection=document.getElementById("comments");
  commentsSection.innerHTML += commentTemplateFn({'commenter': commenterName, 'comment': commentText});
}
