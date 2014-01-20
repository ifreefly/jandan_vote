function getItem(item,callback){
  console.log('sending...');
  chrome.runtime.sendMessage({prop:item},function(response){
    if(response.prop=="ox")
      filter(getClassOfCommentlist(),response.ox);
  });
}

function getClassOfCommentlist(){
  var liItems=[];
  var commentId;
  var commentList=document.getElementsByTagName('li');
  for(i=0,j=0;i<commentList.length;i++){
    if(commentList[i].className=='row'){
      liItems[j]=commentList[i];
      j++;
    }
  }
  return liItems;
}

function filter(commentList,ox){
    if(!ox){
      this.ox=4;
    }else{
      this.ox=ox;
    }
    console.log(ox);
    for(var i=0;i<commentList.length;i++){
      var cosSupport='cos_support-';
      var cosUnsupport='cos_unsupport-';
      commentId=commentList[i].id;
      if(commentId!=''){
	cosSupport+=commentId.substr(8,commentId.length);
	cosUnsupport+=commentId.substr(8,commentId.length);	if(document.getElementById(cosSupport).innerHTML<30&&document.getElementById(cosUnsupport).innerHTML>=10){
	  document.getElementById(commentId).style.display="none";	
	}else if(document.getElementById(cosSupport).innerHTML/ox<document.getElementById(cosUnsupport).innerHTML){
	  document.getElementById(commentId).style.display="none";
	}else{
	  document.getElementById(commentId).style.display="block";
	}
      }
    }
}


getItem("ox",filter);

