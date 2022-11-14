$(function(){
        //------Friends Channel fold-------
        let i = 0;
        $(".friends-screen__channel i").click(function(){
            $(this).toggleClass("on")
            $(".fold").toggleClass("on2");
        })

        //------Chat Search------
        $(".search").click(function () {
            $(this).toggleClass("aa");
            $(".searchTxt").toggleClass("searchON");
        })
});
