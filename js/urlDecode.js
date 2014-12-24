var path=location.search.split("=")[0];

var sendTo=location.search.split("=")[1];

var url;

if(!sendTo){

         sendTo="";

}else{

         sendTo=sendTo.split("&")[0];

         //中文放在Url中必须要encode，decode，否则乱码

         sendTo=decodeURIComponent(sendTo);
         document.title=sendTo+", 圣诞快乐！";
}

function send(idname){

         var txt=document.getElementById(idname).value;

         url=path+"?s="+encodeURIComponent(txt);

         window.location.replace(url);

}
