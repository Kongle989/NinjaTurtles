$(document).ready(function () {
    var audio = new Audio('assets/javascript/tmnt.mp3');
    audio.volume = 0.5;
    var fight = new Audio('assets/javascript/fight.mp3');
    var fx = ['assets/javascript/atk1.mp3',
        'assets/javascript/atk2.mp3',
        'assets/javascript/atk3.mp3',
        'assets/javascript/atk4.mp3'];
    var atks = new Audio();

    audio.play();
    var players = {
        don: {
            hp: 140,
            atk: 30
        },
        leo: {
            hp: 150,
            atk: 25
        },
        raph: {
            hp: 130,
            atk: 35
        },
        mikey: {
            hp: 160,
            atk: 20
        },
        footNinja: {
            name: "Footninja",
            hp: 280,
            atk: 10
        },
        bebop: {
            name: "Bebop",
            hp: 300,
            atk: 15
        },
        rocksteady: {
            name: "Rocksteady",
            hp: 260,
            atk: 20
        },
        shredder: {
            name: "Shredder",
            hp: 1600,
            atk: 50
        }
    }

    var allyHp,
        allyAtk,
        foeName,
        foeHp,
        foeAtk;
    $("<div>", {class: "interface selectChar"}).appendTo(".container");
    $(".selectChar").append("<img class='char don' src='assets/images/DonBW.png' />");
    $(".selectChar").append("<img class='char leo' src='assets/images/LeoBW.png' />");
    $(".selectChar").append("<img class='char raph' src='assets/images/RaphBW.png' />");
    $(".selectChar").append("<img class='char mikey' src='assets/images/MikeyBW.png' />");

    $(".don").hover(function (event) {
        $(".don").attr("src", "assets/images/Don.png");
    }, function (event) {
        $(".don").attr("src", "assets/images/DonBW.png");
    });
    $(".leo").hover(function (event) {
        $(".leo").attr("src", "assets/images/Leo.png");
    }, function (event) {
        $(".leo").attr("src", "assets/images/LeoBW.png");
    });
    $(".raph").hover(function (event) {
        $(".raph").attr("src", "assets/images/Raph.png");
    }, function (event) {
        $(".raph").attr("src", "assets/images/RaphBW.png");
    });
    $(".mikey").hover(function (event) {
        $(".mikey").attr("src", "assets/images/Mikey.png");
    }, function (event) {
        $(".mikey").attr("src", "assets/images/MikeyBW.png");
    });

    $("<div>", {class: "interface charSelected"}).appendTo(".container");
    $("<div>", {class: "interface button"}).appendTo(".container");
    $(".button").append($('<button class="attack" disabled>Attack</button>'));
    $("<div>", {class: "interface enemySelected"}).appendTo(".container");

    $("<div>", {class: "interface selectEnemy"}).appendTo(".container");
    $(".selectEnemy").append("<img class='enemy footNinja' src='assets/images/footNinjaBW.jpg' />");
    $(".selectEnemy").append("<img class='enemy bebop' src='assets/images/BebopBW.jpg' />");
    $(".selectEnemy").append("<img class='enemy rocksteady' src='assets/images/RocksteadyBW.jpg' />");
    $(".selectEnemy").append("<img class='enemy shredder' src='assets/images/ShredderBW.jpg' />");

    $(".footNinja").hover(function (event) {
        $(".footNinja").attr("src", "assets/images/footNinja.jpg");
    }, function (event) {
        $(".footNinja").attr("src", "assets/images/footNinjaBW.jpg");
    });
    $(".bebop").hover(function (event) {
        $(".bebop").attr("src", "assets/images/Bebop.jpg");
    }, function (event) {
        $(".bebop").attr("src", "assets/images/BebopBW.jpg");
    });
    $(".rocksteady").hover(function (event) {
        $(".rocksteady").attr("src", "assets/images/Rocksteady.jpg");
    }, function (event) {
        $(".rocksteady").attr("src", "assets/images/RocksteadyBW.jpg");
    });
    $(".shredder").hover(function (event) {
        $(".shredder").attr("src", "assets/images/Shredder.jpg");
    }, function (event) {
        $(".shredder").attr("src", "assets/images/ShredderBW.jpg");
    });

    $(".char").on("click", function () {
        $(this).off('mouseenter mouseleave');
        $(this).toggle();
        $(this).attr('class', $(this).attr('class').substr(5)).toggle();
        $(".charSelected").prepend(this);
        $(".char").off("click");
        $(this).off("click");
        var pick = $(this).attr('class');
        $("<div>", {class: "interface charStat"}).appendTo(".charSelected");
        $(".charStat").html("<br>Health: " + players[pick].hp
            + "<br>Attack: " + players[pick].atk);
        allyHp = players[pick].hp;
        allyAtk = players[pick].atk;
        startFight();
    });
    $(".enemy").on("click", function () {
        $(this).off('mouseenter mouseleave');
        $(this).toggle();
        $(this).attr('class', $(this).attr('class').substr(6)).toggle();
        $(".enemySelected").html(this);
        $(".enemy").off("click");
        $(this).off("click");
        var pick = $(this).attr('class');
        $("<div>", {class: "interface enemyStat"}).appendTo(".enemySelected");
        $(".enemyStat").html("<br><bold>" + players[pick].name
            + "</bold><br>Health: " + players[pick].hp
            + "<br>Attack: " + players[pick].atk);
        foeName = players[pick].name;
        foeHp = players[pick].hp;
        foeAtk = players[pick].atk;
        startFight();
    });
    function startFight() {
        if (!$(".charSelected").is(":empty") && !$(".enemySelected").is(":empty")) {
            $(":button").prop('disabled', false);
            audio.pause();
            fight.volume = 0.4;
            fight.play();
        }
        else {
            $(":button").prop('disabled', true);
        }
    };
    $(":button").on("click", function () {
        atks.src = fx[Math.floor(Math.random() * 4)];
        atks.play();
        $(".enemySelected").effect("shake", 200);
        setTimeout(function () {
            $(".charSelected").effect("shake", 200);
            atks.src = fx[Math.floor(Math.random() * 4)];
            atks.play();
        }, 500);
    });
});