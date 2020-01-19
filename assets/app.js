/* 
/hover effect on buttons (it's better to just use css though ;)
$(".toggleButton").hover(
    on hover - make gray
    function(){
    $(this).addClass("highlightedButton")
}, 
    once out of hover - revert to #EEEEEE
    function(){
    $(this).removeClass("highlightedButton")
});
*/

//on click remove or add .active

function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type = 'text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

    
}

$(".toggleButton").click(function(){
    //add or remove active class on click
    $(this).toggleClass("active");
    //create variable with panel id + "Panel"
    var panelID = $(this).attr("id") + "Panel";
    //select ID to toggle class of hidden
    $("#" + panelID).toggleClass("hidden");
    //get number of panels currently on screen with class of "hidden"
    var numberOfActivePanels = 4 - $(".hidden").length
    //change width of panels based on numberOfActivePanel
    $(".panel").width($(window).width() / numberOfActivePanels - 10);
    updateOutput();
});




$(".panel").height($(window).height() - $("#header").height() - 21);
$(".panel").width($(window).width() / 2 - 10);


$("textarea").on('change keyup paste', function() {
    updateOutput()
});