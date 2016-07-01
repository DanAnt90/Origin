var $clock = $("#clock h1").eq(0),
    $start = $("#start").eq(0),
    $reset = $("#reset").eq(0);


function startClock() {
    interval = setInterval(function() {
        var $date = new Date(),
            $hours = $date.getHours(),
            $minuts = $date.getMinutes(),
            $seconds = $date.getSeconds();
        if ($hours < 10) $hours = "0" + $hours;
        if ($minuts < 10) $minuts = "0" + $minuts;
        if ($seconds < 10) $seconds = "0" + $seconds;
        $clock.html($hours + ":" + $minuts + ":" + $seconds)
    }, 1000)
    $reset.on("click", function() {
        return resetTime(interval);
    })
}

function resetTime(interval) {
    clearInterval(interval);
    $clock.html("00:00:00")
}
$start.on("click", function() {
    return startClock();
})