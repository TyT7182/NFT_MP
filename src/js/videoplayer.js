if (window.location.pathname == '/') {
    let video = document.getElementById("video");            // Получаем элемент video
    let videoTrack = document.querySelector(".video-track"); // Получаем элемент Видеодорожки
    let time = document.querySelector(".timeline");          // Получаем элемент времени видео
    let btnPlay = document.querySelector(".play");           // Получаем кнопку проигрывания
    let btnPause = document.querySelector(".pause");         // Получаем кнопку паузы
    let videoPlay;

    let videotime = document.getElementById("ttt"); // Счетчик времени видео
    let fullscreen_btn = document.getElementById("fullscreen"); // Кнопка полноэкранного режима
    let on = document.getElementById("volume_on"); // кнопка включения звука
    let off = document.getElementById("volume_off"); // кнопка выключения звука

    // Пуск

    btnPlay.addEventListener("click", function() {
        video.play(); // Запуск проигрывания
        btnPlay.style.display = 'none';
        btnPause.style.display = 'block';
        // Запуск интервала
        videoPlay = setInterval(function() {
            // Создаём переменную времени видел
            let videoTime = Math.round(video.currentTime)
            // Создаём переменную всего времени видео
            let videoLength = Math.round(video.duration)
            // Вычисляем длину дорожки
            time.style.width = (videoTime * 100) / videoLength + '%';
        }, 10)
    });


    // Пауза

    btnPause.addEventListener("click", function() {
        video.pause(); // Останавливает воспроизведение
        btnPlay.style.display = 'block';
        btnPause.style.display = 'none';
        clearInterval(videoPlay) // убирает работу интервала
    });


    // Открытие полноэкранного режима

    fullscreen_btn.addEventListener("click", function() {
        video.requestFullscreen();
    });


    // Включение и выключение звука

    on.addEventListener("click", function() {
        video.volume = 0;
        on.style.display = 'none';
        off.style.display = 'flex';
    });
    off.addEventListener("click", function() {
        video.volume = 1;
        on.style.display = 'flex';
        off.style.display = 'none';
    });






    // переменные для таймера видео

    var sec = 0;
    var min = 0;
    var t;
    btnPlay.addEventListener("click", function() {
        function tick(){
            sec++;
            if (sec >= 60) {
                sec = 0;
                min++;

            }
        }
        function add() {
            tick();
            videotime.textContent = (min > 9 ? min : "0" + min)
                     + ":" + (sec > 9 ? sec : "0" + sec);
            timer();
            if (sec > Math.round(video.duration)) {           // Условие для остановки таймера, когда видео закончилось
               clearTimeout(t);
               videotime.textContent = "0:00";
               sec = 0; min = 0;

            }
        }
        function timer() {

            t = setTimeout(add, 1000);
            
        }
        timer();
    });
    btnPause.addEventListener("click", function() {           // нажатие на кнопку паузы
        clearTimeout(t);
    });

};
