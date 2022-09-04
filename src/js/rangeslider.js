import noUiSlider from 'nouislider';
if (window.location.pathname == '/') {

    var connectSlider = document.getElementById('slider-connect');

    noUiSlider.create(connectSlider, {
        start: 5,
        connect: 'lower',
        range: {
            'min': 0.01,
            'max': 10
        }

    });


    connectSlider.noUiSlider.on('update', function (values, handle) {
        document.getElementById('value').innerText = connectSlider.noUiSlider.get() + " ETH";
        
    });
};




