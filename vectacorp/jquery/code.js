//jQuery Selectors and Commands
$(document).ready(() => {
    $("h2").css({border: "#000000 solid 1px"})
           .css({color: "#cc1c0d"})
           .css({padding: "3px 20px"})
           .css({borderRadius: "5px 0 5px 0"})
           .css({backgroundColor: "#dfe3e6"});
    $("nav a").addClass("navigation");
    $(".navigation").css({border: "#929ca4 solid 1px"})
                    .css({color: "#cc1c0d"})
                    .css({padding: "3px 0 3px 20px"})    
                    .css({backgroundColor: "#DFE3E6"});
    $("section p").removeClass("vprospect")
                  .removeClass("vconvert")
                  .removeClass("vretain");
    $("aside p").append("<br>Chevy Dealers Association");
    $("aside p:first").wrap("<q>");
});
