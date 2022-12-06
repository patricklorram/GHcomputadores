function clickMenu(){

    if (burger.style.display=='inline-flex'){
        burger.style.display = 'none'
        
    }else{
        burger.style.display='inline-flex'
    }
    
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.getElementById("logo").style.width = '65px'
    document.getElementById("navbar").style.padding = '10px 0px'
  } else {
    document.getElementById("logo").style.width = '100px'
    document.getElementById("navbar").style.padding = "20px 0px"

  }
}