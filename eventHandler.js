//处理content.js对ox值的获取
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    switch(request.prop){
      case 'ox':sendResponse({
	prop:"ox",
	ox: localStorage["ox"]
      });break;
    }
  });
