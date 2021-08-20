$(document).ready(function() {
    var carrentFloor = 01;
    var counterUp = $(".counter-up"); //отдельный этаж
    var counterDown = $(".counter-down"); // счетчик вверх
    var floorPath = $(".home-image path"); //счетчик вниз
    var modal = $(".modal"); // модальное окно
    var modalCloseBtn = $(".modal-close-btn"); // крестик модального окна
    var viewFlatsBtn = $(".view-flats") // кнопка смотреть квариры на этаже


    // При наведении на этаж
    floorPath.on("mouseover", function() {
        floorPath.removeClass("carrent-floor"); //удаляем акивный класс этажа
        carrentFloor = $(this).attr("data-floor"); //значение текущего этажа
        $(".counter").text(carrentFloor); //значение этажа в счетчик
    });

    // открытие модального окна
    floorPath.on("click", toggleModal);
    // закрытие модального окна
    modalCloseBtn.on("click", toggleModal);
    // открытие модального окна нужного этажа
    viewFlatsBtn.on("click", toggleModal);

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


    // открытие/закрытие модального окна
    function toggleModal() {
        modal.toggleClass("is-open");
    }

});