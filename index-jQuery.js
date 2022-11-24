$(function(){
    //------Friends Channel fold-------
    function moveChannel(){
        $(".user-component__column i").click(function(){
            $(this).toggleClass("on4");
            $(".fold").addClass("on2");
            $(".fruit").toggleClass("on3");
        })
    }
    $(".friends-screen__channel-header i").click(function(){
        $(this).toggleClass("on");
        $(".fold").toggleClass("on2");
        $(".fruit").removeClass("on3");
        moveChannel()
    })

    //------Chat Search------
    $(".search").click(function () {
        $(this).toggleClass("aa");
        $(".searchTxt").toggleClass("searchON");
    })
});
