$(function(){
  $("body").on("click","li#login",function(){
     var $x=$(this).offset();
     var $t=$("div#myForm").outerWidth()-$(this).outerWidth()-$(this).outerWidth();
     var $a=$x.left-$t;
     $("div#myForm").css({"left": $a}).fadeIn();
     $("div#myForm").show();
     }).on("click",function(e){
       var tikla=$(e.target);
       if (tikla.closest("li#login").length==0) {
         $("div#myForm").hide();
         $(document).off("click.langs");
       }
     }).on("click","li#langs",function(){
        var $x=$(this).offset();
        var $t=$("p.en").outerWidth()-$(this).outerWidth();
        var $a=$x.left-$t;
        $("ul#langs").css({"left": $a}).fadeIn();
        $("ul#langs").show();
        $(document).on("click",function(e){
          var tikla=$(e.target);
          if (tikla.closest("li#langs").length==0) {
            $("ul#langs").hide();
            $(document).off("click.langs");
          }
        });
      });
    });
