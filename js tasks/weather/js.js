    var api = "http://api.openweathermap.org/data/2.5/forecast/city",
        appId = "74044ec27a75f5ed5e0dc8cc4edc1762",
        time,
        description,
        coord,
        temp,
        imgId,
        city,
        country;

    $('button').click(function() {
        $.ajax({
            method: "GET",
            url: api + "?APPID=" + appId + "&q=" + $('input[name="city"]').val() + "&units=metric&lang=ru"
        }).done(function(msg) {
            console.log(msg);
            $('#result').empty();
            if (msg.cod !== '200')
                $('#result').html(msg.cod + " " + msg.message);
            else {
                country = msg.city.country;
                city = msg.city.name;
                imgId = msg.list[0].weather[0].icon;
                description = msg.list[0].weather[0].description.charAt(0).toUpperCase() + msg.list[0].weather[0].description.slice(1);
                temp = Math.round(msg.list[0].main.temp).toFixed(0) + "C";
                coord = [msg.city.coord.lat + "N" + ", " + msg.city.coord.lon + "E"]
                time = new Date(msg.list[0].dt_txt);
                var hours = time.getHours();
                var minuts = time.getMinutes();
                if (hours < 10) hours = "0" + hours;
                if (minuts < 10) minuts = "0" + minuts;
                $('#result').empty();
                $('#result').append('<div class="item"><p>' + country + '</p></div>');
                $('#result').append('<div class="item"><p>' + city + '</p></div>');
                $('#result').append('<div class="item"><img src="http://openweathermap.org/img/w/' + imgId + '.png" alt="pixabay image"></div>');
                $('#result').append('<div class="item"><p>' + description + '</p></div>');
                $('#result').append('<div class="item"><p>' + temp + '</p></div>');
                $('#result').append('<div class="item"><p>' + coord + '</p></div>');
                $('#result').append('<div class="item"><p>' + hours + ":" + minuts + '</p></div>');
            }

        });
    });