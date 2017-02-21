 $(function () {
            var words = [];
                $.getJSON("words.json", function (data) {
                $.each(data, function (key, value) {
                    words.push(value.word);
                });
                for(var i=0; i<words.length; i++) {
                    $('#search_reg ul').append('<li>'+words[i].toUpperCase()+'</li>');
                }
            });
     
            /*action menu*/
            $('#best-sellers .description').hover(function() {
                 $(this).find('.even').hide();
                $(this).find('.action-menu').show();  
            }, function () {
                 $(this).find('.even').show();
                 $(this).find('#action-menu').hide();
            });
            
     
            var sub_menu = $('#search_reg ul');
            sub_menu.hide();
             $('.in').focusin(function () {
                $(this).attr('placeholder', 'SEARCH');
                 if (document.body.clientWidth >= 768)
                        sub_menu.show();
                 if (document.body.clientWidth <= 768) {
                     $('#star').hide(100);
                 }
                 
            });
             $('.in').focusout(function () {
                $(this).removeAttr('placeholder').val("");
                 sub_menu.hide();
                 $('#star').show(560);
            });
            
            // active       //
            $('#menu a').click(function () {
                $('.active').removeClass('active');
                $(this).addClass('active');
            })
            
            //show menu//
           $('#show_menu').click(function () {
                $('.m123 li').not(this).toggle();
            });
            
            //slider
            var w = $('#pos').width();
            var w_pos = $('.item-pos').width();
            function first() {
                $('.item-pos').animate({
                    left: 10
                }, 500)
            }
            function last() {
                $('.item-pos').animate({
                    left: 391
                }, 500)
            }
            function right() {
                var margin = parseInt( $('.item-pos').css('left'));
                var moove;
                if (margin >= 372) moove = 372;
                else moove = margin + w_pos + 12;
                $('.item-pos').animate({
                    left: moove
                }, 500)
                
            }
            
            function left() {
                var margin = parseInt( $('.item-pos').css('left'));
                var moove;
                if (margin <= 20) moove = 10;
                else moove = margin - w_pos - 12;
                $('.item-pos').animate({
                    left: moove
                }, 500)
                
            }
            $('#center, #anna').click(function () {
                var top = parseInt( $('.item-pos').css('left'));
                if (top ==10) {
                    right();
                    }
                else left();
                $('#slider').css({'backgroundImage': 'url(images/3.png)', 'backgroundPosition':'33px -286px'});
                $('.choosen').removeClass('choosen');
                $('.choosen_e').removeClass('choosen_e');
                $('#anna').addClass('choosen');
            });
            $('#left, #pink').click(function () {
                first();
                $('#slider').css({'backgroundImage': 'url(images/img.png)', 'backgroundPosition':'-165px -103px'});
                $('.choosen').removeClass('choosen');
                $('.choosen_e').removeClass('choosen_e');
                $('#pink').addClass('choosen');
            });
            $('#right, #prada').click(function () {
                last();
                $('#slider').css({'backgroundImage': 'url(images/5.png)', 'backgroundPosition':'40px -13px'});
                $('.choosen').removeClass('choosen');
                $('.choosen_e').removeClass('choosen_e');
                $('#prada').addClass('choosen');
            });
            
            // validate form
            $('#send').click(function () {
                    var email = $('#email').val();
                    if(email == "") {
                        alert("input email pls")
                        return false;
                    }
                else if(!((email.indexOf(".")>0) && (email.indexOf("@")>0)) || /[^a-zA-Z0-9.@_-]/.test(email)) {
                         alert( "Incorrect email\n");
                        return false;
                    }
            $.ajax({
                url:'dataparser.php',
                type:'POST',
                dataType: "json",
                data: ({name: email})
            });
            $('#email').val("");
    });
            //blocs fadeOut
           
            $('.news #1').show("fade", 500);
            $('.news #1').delay(5500).hide("fade", 500);
            
            var num = $('.newBloc').size();
            var count = 2;
            
            setInterval(function () {
                $('.news #'+count).show("fade", 500);
                $('.news #'+count).delay(5500).hide("fade", 500);
                
                if(count == num) {
                    count = 1;
                }
                else {
                    count++;
                }
            }, 6500);
           //twitter widget
            $('#1twit').show("fade");
            $('#1twit').delay(5000).hide("slide", {direction: "down"}, 500);
            
            var num = $('.twitter').size();
            var count = 2;
            
            setInterval(function () {
                $('#'+count+'twit').show("slide", {direction: "left"}, 500);
                $('#'+count+'twit').delay(5000).hide("slide", {direction: "down"}, 500);
                
                if(count == num) {
                    count = 1;
                }
                else {
                    count++;
                }
            }, 6500);
            
            // img popup
            var modal = $('#myModal_img');
            var modalImg = $('#img01');
            var close = $('.close_img');
            $('.widget img').click (function () {
                modal.show();
                modalImg.attr('src', $(this).attr('src'));
            });
            close.click(function() {
                modal.hide();
                modalLog.hide();
            });
            var modalLog = $('#ModalLogin');
            $('#login').click(function () {
                modalLog.show();
            })
            $(document).bind('keydown', function(e) { 
                if (e.which == 27) {
                    modal.hide();
                    modalLog.hide();
                }
            }); 
            //registration
            $('#LoginContent a').eq(0).click(function() {
                $('#log').hide();
                $('#reg').show();
                $(this).hide();
                $('#LoginContent a').eq(1).show();
            });
            $('#LoginContent a').eq(1).hide();
            
            $('#LoginContent a').eq(1).click(function () {
                $('#log').show();
                $('#reg').hide();
                $(this).hide();
                 $('#LoginContent a').eq(0).show();
            });
                //pulldown menu
            $('.categories').mouseover(function() {
                $(this).find('ul').show();
            });
            $('.categories ul').mouseout(function () {
                $(this).hide();
            });
            //products list
            $('.fa-list').click(function () {
                $('.row>[class *= "col-"]').addClass('inline');
                $('.row').css("margin-top", "0px");
                $('.active-filter').removeClass('active-filter');
                $(this).addClass('active-filter');
            });
            
            $('.fa-th-large').click(function () {
                $('.row>[class *= "col-"]').removeClass('inline');
                $('.row').css("margin-top", "33px");
                $('.active-filter').removeClass('active-filter');
                $(this).addClass('active-filter');
            });
        });