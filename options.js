function restore_options(){
  var ox=localStorage["ox"];
  if(!ox){
    return;
  }else{
    var select=document.getElementById("ox");
    select.value=ox;
  }
}

function save_options(){
  var ox=document.getElementById("ox").value;
  var status=document.getElementById("status");
  console.log(ox);
  if(ox<1||ox>20){
    status.innerHTML="错误，赞成反对比范围是1~20";
    setTimeout(function(){
      status.innerHTML="";
    },2000);
  }else{
    localStorage["ox"]=ox;
//     sendMessageToContent({
//       prop:'ox',
//       value:ox
//     });
    status.innerHTML="已保存";
    setTimeout(function(){
      status.innerHTML="";
    },2000);
  }
}

function sendMessageToContent(msg){
  chrome.tabs.query({
    url:"http://jandan.net/pic/*"
  },function(tabs){
    for(i=0;i<tabs.length;i++){
      chrome.tabs.sendMessage(tabs[i].id,msg,function(response){
	console.log(response.farewell);
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);

