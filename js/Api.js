

var token = "8f4a01d2d64f5d7898b1f9485d42095fe1c68c5b"
        var url = "https://api.github.com/users/jrharper0592" + "?access_token=" + token;
        var url2 = "https://api.github.com/users/jrharper0592/repos" + "?access_token=" + token;
        var userinfo = $.get(url)
        var repoinfo = $.get(url2)
        var left = document.querySelector(".user")
        var right = document.querySelector(".repos")

        var template_url = "./templates/left_Template.html";

        var right_template_url = "./templates/right_template.html";
            
        var template = $.get(template_url);
        var right_template = $.get(right_template_url);   

            // var print = function(d){return console.log((typeof d == 'string'?d:JSON.stringify(d , null , '    ')))}
        // var print = function(d) {
            // $('body').append('<pre>' + (typeof d == 'string' ? d : JSON.stringify(d)) + '</pre>')
        // }

        $.when( repoinfo, right_template).then( draw )
        $.when( userinfo, template).then( drawprofile )

        function drawprofile(data, template) {
            $('.user').append(
                _.template( template[0], data[0] )
            )
        }


        function drawme(d, right_template) {
            d[0].forEach(function(current) {
                right.innerHTML += _.template( right_template[0], current ) //[arrOfName,"Repositories" ]
            })
        }




    })

}
