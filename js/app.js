$(document).ready(function() {

    $('#profile__ripple').ripples({
        resolution: 512,
        dropRadius: 5
    });

    const bars = document.querySelectorAll('.progress__bar');

    bars.forEach(function(bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })


    var $wrapper = $('.portfolio__wrapper');
    // Initialize isotope 
    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;
        link.addEventListener('click', function(e) {
            e.preventDefault();

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
            })

            e.target.classList.add('active');

        });
    })

//wasim
    // Magnify pop up 
    console.log($('.magnify').magnificPopup)
    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enable: true
        }
    });

    // Slider

    $('.slider').slick({
        arrows: false,
        autoplay: true
    });


    $('.certification-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000, // Set the interval in milliseconds (5 seconds in this example)
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        arrows: false,
        dots: false,
     });

     // Add your PDF slides dynamically
     var certifications = ['Admin.jpg', 'AppBuilder.jpg', 'Associate.jpg','JS.jpg','Omni.jpg','PD1.jpg'];

        certifications.forEach(function(certification) {
            var filePath = '/MyPortfolio/files/' + certification; // Adjust the path to your images folder
            $('.certification-slider').slick('slickAdd', '<div><img src="' + filePath + '" alt="Certification" style="width:100%;"></div>');
        });
});
