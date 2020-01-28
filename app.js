$(document).ready(function(){
    $('.home').click(function(){
        // alert('hashsdahsh')
        let selected = $(this);
        $('.home').removeClass('.active');
        $(selected).addClass('.active');
    });
    let $a = $('.home'),
        $b = $('.about'),
        $c = $('.gallery'),
        $d = $('.contact'),
        $home = $('.home1'),
        $about = $('.about1'),
        $gallery = $('.gallery1'),
        $contact = $('.contact1');

    $a.click(function(){
        $home.fadeIn();
        $about.fadeOut();
        $gallery.fadeOut();
        $contact.fadeOut();
    });
    $b.click(function(){
        $home.fadeOut();
        $about.fadeIn();
        $gallery.fadeOut();
        $contact.fadeOut();
    });
    $c.click(function(){
        $home.fadeOut();
        $about.fadeOut();
        $gallery.fadeIn();
        $contact.fadeOut();
    });
    $d.click(function(){
        $home.fadeOut();
        $about.fadeOut();
        $gallery.fadeOut();
        $contact.fadeIn();
    });
});