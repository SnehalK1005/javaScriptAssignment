function getForm(){
	$("body").on("click","#addBlog", function(){
		$(".form-popup").removeClass("hide");
	});
}

function closeForm() {
  document.getElementById("popup1").style.display = "none";
}

function addBlog() {
  document.getElementById("popup1").style.display = "block";
}

function saveForm() {
  var names = $("#names").val();
  var titles = $("#titles").val();
  var contents = $("#contents").val();
  var dates = new Date();

  $("#content").append('<div class="post"><h2 class="title"><a href="#">'+titles+'</a></h2><p class="meta">Posted by <a href="#">'+names+'</a> on '+dates+'&nbsp;&bull;&nbsp; <a href="#" class="comments">Comments (64)</a> &nbsp;&bull;&nbsp; <a href="#" class="permalink">Full article</a></p><div class="entry"><p><img src="images/img03.jpg" width="186" height="186" alt="" class="alignleft border" />'+contents+'</p></div></div>');
  
  document.getElementById("popup1").style.display = "none";
}