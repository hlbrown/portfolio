var display = document.getElementById("timer"),
start = document.getElementsByClassName("start"),
stop = document.getElementsByClassName("stop"),
seconds = 0,
minutes = 0,
hours = 0,
time= -1;
run = false;

start[0].addEventListener('click', startTimer);
stop[0].addEventListener('click', stopTimer);

function startTimer() {

    if (!run){
       
        run = true;
        
        timer();
        
        time = setInterval( timer, 1000);
    }
    }
    
    function stopTimer() {
    clearInterval(time);
    run = false;
    
    }

   

    function timer(){
        document.getElementById('timer').innerHTML = ExtraZero(hours)+":"+ExtraZero(minutes)+":"+ExtraZero(seconds);
        
        seconds++;
        
        if (seconds >= 60){
            seconds = 0;
            minutes++;
        
            if (minutes >= 60){
                minutes = 0;
                hours ++;
            }
        }
        }
        function resetTimer(){
            stopTimer();
            hours = minutes = seconds = 0;
            document.getElementById('timer').innerHTML = "00:00:00";
        }

        function ExtraZero(i) {
            if (i < 10)
            {
                i = "0" + i
            }
            return i
            }  
    
        
        