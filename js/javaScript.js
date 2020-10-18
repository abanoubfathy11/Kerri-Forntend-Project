//  Start of Colors Box

$('.inner').click(function()
{
    let tempWdith=$('.colors-box').css('left');
    if(tempWdith=='0px')
    {
        let boxWdith=$(".colors-option").innerWidth();
        $('.colors-box').animate({left:-boxWdith},500);
       
    }
    else
    {
        $('.colors-box').animate({left:'0px'},500);
    }
});

$(".color-item").click(function(){

    let color=$(this).css('backgroundColor');
    let navcolor;
    $(".navbar-nav li a").hover(function () {
            // over
            navcolor=$(this).css('color');
            $(this).attr('style',`color: ${color} !important`)
        }, function () {
            // out
            $(this).attr('style',`color: ${navcolor} !important`)
        }
    );
    $('h1,h2,h3,h4,h5,h6,p').css('color',color);
});
// End of Colors Box


// El Bta3a Elly Bttnatt 

setInterval(scrollAnimate,1);
// End of Scroll


// Start of Navbar

$(window).scroll(function(){

    let scroll=$(window).scrollTop();
    let active=$("#active");
 
    if(scroll==0)
    {   
        $("#active").attr("style","color: #C1596C !important");
        scrollTop();
    }
    else
    {
        $("#active").attr("style","color: rgb(33, 37, 41) !important");
        scrollAny();
    }
});

$(".nav-link").click(function(){
    let src=$(this).attr('href');
    if(src=='#navbar')
    {
        $("html,body").animate({ scrollTop:'0' } ,2000)
    }
    else
    {    
        let distanceOfSection=$(src).offset().top;
        $("html,body").animate({ scrollTop:distanceOfSection } ,2000)
    }
});
// End of Navbar


// Start Btn of Go Top of Website

$(window).scroll(function(){

    let scroll=$(window).scrollTop();

    if(scroll>100)
    {
        $('.scrollUp').fadeIn(500);
    }
    else
    {
        $('.scrollUp').fadeOut(500);
    }

});

$(".scrollUp").click(function(){

    $("html,body").animate( { scrollTop:'0' } ,2000);
    

});
// End Btn of Go Top of Website


//   Start of Heading Animation

var typed = new Typed('.element',{
    strings: ["I'M A Photographer.^1000", "I'M A Graphic Designer.^1000","I'M Abanoub.^1000"],
    typeSpeed: 60,
    loop:true,
    smartBackspace: true,
    backSpeed:60,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
});
//   End of Heading Animation


// Start of Caousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay : true,
    loop: true,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    autoplayTimeout:3000,
    dotsSpeed:1000,
    dots:true,
    });
});
// End of Caousel


// Start Some Helper Functions
function scrollAny()
{
    $("#navbar").css('backgroundColor','white');
    $("#navbar").css('box-shadow','0 1px 8px 3px rgba(0, 0, 0, 0.5)');
    $(".custom-nav a").css('color','#212529');
    $(".custom-nav span").css('color','#212529');

    // $('#active').css('color','#C1596C');
    
    let about=$('#about').offset().top;
    let servcies=$('#servcies').offset().top;
    let our_clients=$('#our-clients').offset().top;
    let our_works=$('#our-works').offset().top;
    let blog=$('#blog').offset().top;
    let contact_us=$('#contact-us').offset().top;

    let scroll=$(window).scrollTop();

    if(scroll +50>about && scroll < servcies -50)
    {
        $("a[href='#about']").attr('style', "color:#C1596C !important")
    }
    else
    {
        $("a[href='#about']").attr('style',"color: rgb(33, 37, 41) !important")
    }
    
    if(scroll+50>servcies && scroll < our_clients-50)
    {
        $("a[href='#servcies']").attr('style', "color:#C1596C !important")
    }
    else
    {
        $("a[href='#servcies']").attr('style',"color: rgb(33, 37, 41) !important")
    }

    if(scroll+50>our_clients && scroll < our_works-50)
    {
        $("a[href='#our-clients']").attr('style', "color:#C1596C !important")
    }
    else
    {
        $("a[href='#our-clients']").attr('style',"color: rgb(33, 37, 41) !important")
    }


    if(scroll+50>our_works && scroll < blog-50)
    {
        $("a[href='#our-works']").attr('style', "color:#C1596C !important")
    }
    else
    {
        $("a[href='#our-works']").attr('style',"color: rgb(33, 37, 41) !important")
    }

    if(scroll+50>blog && scroll < contact_us-50)
    {
        $("a[href='#blog']").attr('style', "color:#C1596C !important")
    }
    else
    {
        $("a[href='#blog']").attr('style',"color: rgb(33, 37, 41) !important")
    }
    if( scroll +50> contact_us)
    {
        $("a[href='#contact-us']").attr('style', "color:#C1596C !important")
    }
    else
    {
        $("a[href='#contact-us']").attr('style',"color: rgb(33, 37, 41) !important")
    }

}

function scrollTop()
{
    $("#navbar").css('backgroundColor','transparent');
    $("#navbar").css('box-shadow','none');
    $(".custom-nav a").css('color','rgba(255, 255, 255, .8)');
    $(".custom-nav span").css('color','rgba(255, 255, 255, .8)');
    $('#active').css('color','#C1596C');
}

function scrollAnimate()
{ 
    $(".center").animate({bottom:'40px'},400);
    $(".center").animate({bottom:'20px'},200);
    $(".center").animate({bottom:'30px'},400);
    $(".center").animate({bottom:'20px'},200);
    $(".center").animate({bottom:'20px'},1000);
};

// End Some Helper Functions

//////////////////////////////

$("#our-works .container .row ul li").click(function(){

    let searchID=$(this).attr('name');
    let itemsBox=document.querySelectorAll("#our-works .container .row .items");

    if(searchID=='all')
    {
        $("#our-works .container .row  .seo").show(1000);
        $("#our-works .container .row  .webdesign").show(1000);
        $("#our-works .container .row  .work").show(1000);
        $("#our-works .container .row  .wordpress").show(1000);
    }
    else if(searchID=='seo')
    {
        
       for(let i=0;i<itemsBox.length;i++)
       {    
           if(!itemsBox[i].classList.contains('seo'))
           {
            itemsBox[i].classList.add('nopee');
           }
           else{
            itemsBox[i].classList.add('yess');
           }
       }
       $('.nopee').hide(1000);
       $('.yess').show(1000);

       for(let i=0;i<itemsBox.length;i++)
       {    
           if(itemsBox[i].classList.contains('nopee') || itemsBox[i].classList.contains('yess'))
           {
            itemsBox[i].classList.remove('nopee');
            itemsBox[i].classList.remove('yess');
           }
       }
    }

    else if (searchID=='webdesign')
    {  
        for(let i=0;i<itemsBox.length;i++)
        {    
            if(!itemsBox[i].classList.contains('webdesign'))
            {
             itemsBox[i].classList.add('nopee');
            }
            else 
            {
                itemsBox[i].classList.add('yess');
            }
        }

        $('.nopee').hide(1000);
        $('.yess').show(1000);

        for(let i=0;i<itemsBox.length;i++)
        {    
            if(itemsBox[i].classList.contains('nopee') || itemsBox[i].classList.contains('yess'))
            {
             itemsBox[i].classList.remove('nopee');
             itemsBox[i].classList.remove('yess');
            }
        }

    }

    else if (searchID=='work')
    {  
        for(let i=0;i<itemsBox.length;i++)
        {    
            if(!itemsBox[i].classList.contains('work'))
            {
                itemsBox[i].classList.add('nopee');
            }
            else 
            {
                itemsBox[i].classList.add('yess');
            }
        }

        $('.nopee').hide(1000);
        $('.yess').show(1000);

        for(let i=0;i<itemsBox.length;i++)
        {    
            if(itemsBox[i].classList.contains('nopee') || itemsBox[i].classList.contains('yess'))
            {
             itemsBox[i].classList.remove('nopee');
             itemsBox[i].classList.remove('yess');
            }
        }

    }

    else if (searchID=='wordpress')
    {  
        for(let i=0;i<itemsBox.length;i++)
        {    
            if(!itemsBox[i].classList.contains('wordpress'))
            {
             itemsBox[i].classList.add('nopee');
            }
            else 
            {
                itemsBox[i].classList.add('yess');
            }
        }

        $('.nopee').hide(1000);
        $('.yess').show(1000);

        for(let i=0;i<itemsBox.length;i++)
        {    
            if(itemsBox[i].classList.contains('nopee') || itemsBox[i].classList.contains('yess'))
            {
             itemsBox[i].classList.remove('nopee');
             itemsBox[i].classList.remove('yess');
            }
        }

    }
   
});
