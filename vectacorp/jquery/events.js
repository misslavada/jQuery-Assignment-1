import { lightgray } from "color-name";

$(document).ready(()=> {
    $(".button1").click((e) => {
        alert("OMG you did it?!? That's wild.");
    });
    $(".button2").on("click", () => {
        alert("Now you've clicked this button, whaaaa");
    });
    $(".button3").on("click", () => {
        alert("You'll do anything I say, wont you?");
    });
    $(".button4").add(".button5").on("click", () => {
        alert("Doesn't matter, this isn't the Matrix");
    });
    // $(".divBox").css({width: "400px"})
    //         .css({height: "400px"})
    //         .on("mouseenter", () => {
    //             alert("The mouse has entered the div building");
    //         })
    //         $(".divBox").on("mouseleave", () => {
    //             alert("The mouse has left the div building");
    //         });
    //part 21 not done yet
    //this part isn't working right either, lets come back to that
    // $("span").onclick(() => {
    //     $("span").on("mouseenter", () => {
    //     alert("The mouse had entered once again!")
    //     })
    //     .on("mouseleave", () => {
    //         alert("And yet he must leave us all, once more.")
    //     })
    // });
    // $("a").click((e) =>{
    //     e.preventDefault();
    //     $(this).css({color: "red"});
    //     console.log(event.type);
    // });
    // $(document).resize(function() {
    //     $(".sizeBox").height().width();
    // }); 
    $("input").focusin (()=>{
        $(this).css({backgroundColor: "lightgray"});
    });   
    $("input").focusoff (()=>{
        $(this).css({backgroundColor: "white"});
    });
    
});