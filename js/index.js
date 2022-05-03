window.onload = function(){
    $(".image").mouseover(function() {
        $(this).attr("src", $(this).data("animated"));
    }),
    $(".image").mouseout(function() {
        $(this).attr("src", $(this).data("static"));
    });

    var d = document.getElementById('discord');
    var i = 0;
    d.addEventListener('click', function(){
        i++;
        if(i == 5) {
            alert("?");
        } else if(i == 15) {
            alert("??");
        } else if(i == 30) {
            alert("불만 있어?");
        } else if(i == 50) {
            alert("음?");
        } else if(i == 100) {
            alert("그만 좀 때려");
        } else if(i == 150) {
            alert("그만해");
        } else if(i == 200) {
            alert("이봐, 200번이나 때렸어");
        } else if(i == 275) {
            alert("날 때려서 원하는건 뭐야?");
        } else if(i == 350) {
            alert("저기... 손은 괜찮아?");
        } else if(i == 450) {
            alert("날 눌러서 원하는게 뭔데");
        } else if(i == 700) {
            alert("이 정도면 그냥 매크로 돌리는거 아닌가");
        } else if(i == 1000) {
            alert("난 포기한다");
            $(this).attr("style", "display: none;");
        }
    })
}