$(document).ready(function() {
    var carrentFloor = 01;
    var counterUp = $(".counter-up"); //отдельный этаж
    var counterDown = $(".counter-down"); // счетчик вверх
    var floorPath = $(".home-image path"); //счетчик вниз


    // При наведении на этаж
    floorPath.on("mouseover", function() {
        floorPath.removeClass("carrent-floor"); //удаляем акивный класс этажа
        carrentFloor = $(this).attr("data-floor"); //значение текущего этажа
        $(".counter").text(carrentFloor); //значение этажа в счетчик
    });

    counterUp.on("click", function() { //клик счетчик вверх
        if (carrentFloor < 17) { //проверка значения этажа
            carrentFloor++; //прибавление этажа
            usCarrentFloor = carrentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); //формат этажа (01 не 1)
            $(".counter").text(usCarrentFloor); //запись значения этажа в счетччик

            floorPath.removeClass("carrent-floor"); //удаляем акивный класс этажа
            $(`[data-floor=${usCarrentFloor}]`).toggleClass("carrent-floor"); //подсвечиваем текущий этаж
        }

    });

    counterDown.on("click", function() { //клик счетчик вниз
        if (carrentFloor > 1) {
            carrentFloor--;
            usCarrentFloor = carrentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCarrentFloor);

            floorPath.removeClass("carrent-floor");
            $(`[data-floor=${usCarrentFloor}]`).toggleClass("carrent-floor");
        }

    });

});