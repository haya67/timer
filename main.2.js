$(document).ready(function() {

// start
    $('#startButton').click(function() {
        $(' .time').text('0:0:0:0');
        
        timer = setInterval("countUp()",100);
        
        $(this).attr ('disabled','disabled');
        $(' #stopButton').removeAttr('disabled');
    });

// stop
    $('#stopButton').click(function() {
        clearInterval(timer);
        
        $(this).attr('disabled', 'disabled');
        $('#resetButton').removeAttr('disabled');
    });


// reset
    $('#resetButton').click(function() {
        
        msec = 0;
        sec = 0;
        min = 0;
        hour = 0;
        
        $('.time').text('0:0:0:0');
        clearInterval(timer);
        
        $(this).attr('disabled' , 'disabled');
        $('#stopButton').attr('disabled','disabled');
        $('#startButton').removeAttr('disabled');
        
    });

});

// ------------------------------

msec = 0;
sec  = 0;
min  = 0;
hour = 0;

function countUp () {
    msec += 1;
    
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
    
    if(sec > 59) {
        sec = 0;
        min += 1;
    }
    
    if(min > 59) {
        min = 0;
        hour += 1;
    }
    
    
    msecNumber = msec;
    
    secNumber = sec;
    
    minNumber = min;
    
    hourNumber = hour;
    
    
    
    $('.time').text (hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);

    
}
