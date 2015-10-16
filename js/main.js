
require.config({

    baseUrl: "js",

    paths: {
        
        "jquery": "lib/jquery-1.7.2",
        "math": "lib/math"
    }

});


require(["math", "jquery"], function (math, jquery) {

    $("._clickShow").click(function (event) {
        
        $(this).css("background", "blue");

        alert("我变蓝色了！:"+math.add(1,1));

    });

});