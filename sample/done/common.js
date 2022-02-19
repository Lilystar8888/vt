//點按鈕開啟或關閉面板
const toggleMenu = (event) => {
  console.log("toggleMenu");
  event.preventDefault();
  $(".toolpanel").toggleClass("show");
  event.stopPropagation();
};

//點空白處關閉面板
document.addEventListener("click", () => {
  $(".toolpanel").removeClass("show");
});

//避免點面板內關閉
$(document).ready(function(){
  $(".toolpanel").click(event => {
    event.stopPropagation();
  });
});


