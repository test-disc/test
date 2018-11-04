$(function ($) {

    var languageButton = $('.language-button');

    translateTest("en");
    changeButtons($('.language-button-english'));

    $(languageButton).click(function () {
        if ($(this).hasClass('button-disabled'))
            return;

        var lang = $(this).attr("id");
        translateTest(lang);

        $(languageButton).each(function () {
            changeButtons($(this));
        })
    });

    function translateTest(lang) {
        $(".language-text").each(function () {
            $(this).text(arrLang[lang][$(this).attr("id")]);
        });
    }

    function changeButtons(button) {
        if ($(button).hasClass('button-disabled'))
            $(button).removeClass('button-disabled');
        else
            $(button).addClass('button-disabled');
    }

    var iconYesSelected = ".icon-yes.selected";
    var iconNoSelected = ".icon-no.selected";

    $('.answer-icon').click(function () {
        var other;
        if ($(this).hasClass('not-selected')) {
            if ($(this).hasClass('icon-yes')) {
                $(this).attr("src", "content/icons/icon-yes-selected.png");
                other = $(this).parent().parent().find(iconNoSelected);
                if ($(other).length > 0) {
                    changeSelection($(other), false);
                }
                other = $(this).parent().parent().parent().find(iconYesSelected);
                if ($(other).length > 0) {
                    changeSelection($(other), true);
                }
            } else {
                $(this).attr("src", "content/icons/icon-no-selected.png");
                other = $(this).parent().parent().find(iconYesSelected);
                if ($(other).length > 0) {
                    changeSelection($(other), true);

                }
                other = $(this).parent().parent().parent().find(iconNoSelected);
                if ($(other).length > 0) {
                    changeSelection($(other), false);
                }
            }

            $(this).removeClass('not-selected');
            $(this).addClass('selected');

        } else {
            if ($(this).hasClass('icon-yes'))
                changeSelection($(this), true);
            else
                changeSelection($(this), false);
        }
    });

    $('.save-test-button').click(function () {
        var mostMap = new Map();
        var leastMap = new Map();
        var answered = 0;

        var selected = $('.test-box').find('.selected');
        $(selected).each(function (index, el) {
            var value = $(el).attr('data-val');
            var number;
            if ($(el).hasClass('icon-yes')) {
                number = parseInt(mostMap.get(value));
                if (isNaN(number)) {
                    mostMap.set(value, 1);
                } else {
                    number = number + 1;
                    mostMap.set(value, number);
                }
            } else {
                number = parseInt(leastMap.get(value));
                if (isNaN(number)) {
                    leastMap.set(value, 1);
                } else {
                    number = number + 1;
                    leastMap.set(value, number);
                }
            }
            answered = answered + 1;
        });

        if (answered !== 48) {
            $('.question-box').each(function (index, el) {
                var selected = $(el).find('.selected');
                if ($(selected).length < 2) {
                    $(el).addClass('missing-answers')
                } else {
                    $(el).removeClass('missing-answers')
                }
            });
            $('#error-box').show();
            return;
        } else {
            $('.question-box.missing-answers').removeClass('missing-answers');
            $('#error-box').hide();
        }

        addValues(leastMap, mostMap);

        var testContent = $('.test-content');
        var resultContent = $('.results-content');
        testContent.empty();
        $(resultContent).css("display", "flex");
        showCharts();
    });

    function addValues(leastMap, mostMap) {
        $('#red-most-value').val(getMostRed(isNaN(mostMap.get("1")) ? 0 : mostMap.get("1")));
        $('#yellow-most-value').val(getMostYellow(isNaN(mostMap.get("2")) ? 0 : mostMap.get("2")));
        $('#green-most-value').val(getMostGreen(isNaN(mostMap.get("3")) ? 0 : mostMap.get("3")));
        $('#blue-most-value').val(getMostBlue(isNaN(mostMap.get("4")) ? 0 : mostMap.get("4")));
        $('#red-least-value').val(getLeastRed(isNaN(leastMap.get("1")) ? 0 : leastMap.get("1")));
        $('#yellow-least-value').val(getLeastYellow(isNaN(leastMap.get("2")) ? 0 : leastMap.get("2")));
        $('#green-least-value').val(getLeastGreen(isNaN(leastMap.get("3")) ? 0 : leastMap.get("3")));
        $('#blue-least-value').val(getLeastBlue(isNaN(leastMap.get("4")) ? 0 : leastMap.get("4")));
    }

    function changeSelection(selection, isYes) {
        var icon;
        if (isYes) {
            icon = "content/icons/icon-yes.png";
        } else {
            icon = "content/icons/icon-no.png";
        }
        $(selection).removeClass('selected');
        $(selection).addClass('not-selected');
        $(selection).attr("src", icon);
    }

    function showCharts() {
        showChart($('#results-box-most'), $('#red-most-value').val(), $('#yellow-most-value').val(),
            $('#green-most-value').val(), $('#blue-most-value').val(), "Adapted Style");
        showChart($('#results-box-least'), $('#red-least-value').val(), $('#yellow-least-value').val(),
            $('#green-least-value').val(), $('#blue-least-value').val(), "Basic Style");
    }

    function showChart(placeholder, red, yellow, green, blue, title) {
        var myChart = new Chart($(placeholder), {
            type: 'bar',
            data: {
                labels: ["Red: " + red, "Yellow: " + yellow, "Green: " + green,
                    "Blue: " + blue],
                datasets: [{
                    data: [red, yellow, green, blue],
                    backgroundColor: [
                        'rgba(217, 85, 79, 0.8',
                        'rgba(249, 186, 90, 0.8)',
                        'rgba(90, 184, 143, 0.8)',
                        'rgba(31, 91, 164, 0.8)'
                    ]
                }]
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                    responsive: true,
                    display: true,
                    text: title
                },
                animation: {
                    onComplete: done
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            steps: 5,
                            stepValue: 5,
                            max: 100
                        }
                    }]
                }
            }
        });

        function done() {
            var pictureHolder = $(placeholder).attr('id') + '-picture';
            $('#' + pictureHolder).attr('src', myChart.toBase64Image());
            $(placeholder).css('display', 'none');
        }
    }
});