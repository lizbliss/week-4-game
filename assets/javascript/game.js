$(document).ready(function() {
    var Random = Math.floor(Math.random() * 101 + 19)

    $('.randomNumber').text(Random);

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('.numberWins').text(wins);
    $('.numberLosses').text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        $('.randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('.currentTotal').text(userTotal);
    }

    function win() {
        $("#box").html("You won!");
        wins++;
        $('.numberWins').text(wins);
        reset();
    }

    function lose() {
        $("#box").html("You lose!");
        losses++;
        $('.numberLosses').text(losses);
        reset()
    }

    $('.char1').on('click', function() {
        userTotal = userTotal + num1;

        $('.currentTotal').text(userTotal);

        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            lose();
        }
    })

    $('.char2').on('click', function() {
        userTotal = userTotal + num2;

        $('.currentTotal').text(userTotal);
        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            lose();
        }
    })

    $('.char3').on('click', function() {
        userTotal = userTotal + num3;

        $('.currentTotal').text(userTotal);

        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            lose();
        }
    })

    $('.char4').on('click', function() {
        userTotal = userTotal + num4;

        $('.currentTotal').text(userTotal);

        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            lose();
        }
    });
});
