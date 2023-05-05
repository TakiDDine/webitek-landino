"use strict";

window.addEventListener('load', function() {



//start spr-countdown
var $header_timer_countdown = $('#header-timer-countdown');
$header_timer_countdown.countdown('2023/05/07 23:59:59', function (event) {
    $header_timer_countdown.find('.days').html(event.strftime('%D'));
    $header_timer_countdown.find('.hours').html(event.strftime('%H'));
    $header_timer_countdown.find('.minutes').html(event.strftime('%M'));
    $header_timer_countdown.find('.seconds').html(event.strftime('%S'));
}).on('finish.countdown', function () {

}//end finish.countdown
);//end spr-countdown
});
