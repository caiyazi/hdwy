var  nav = document.getElementsByClassName('nav')[0];
var navli = nav.children;
for(var i=0;i<navli.length;i++){
    navli[i].onclick = function(){
        for(var i=0;i<navli.length;i++){
            navli[i].className = "";
        }
            this.className ="active";
    }
}