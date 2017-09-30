const PATTERN = /^[A-G](b|#)?((m|maj|M|add|aug|dim|sus)([2-7]|9|11|13)?)?(\/[A-G](b|#)?)?$/i;

function throwAlertWrongChord() {
    $("#alert-wrong-chord").addClass('show');
    setTimeout(function() { $("#alert-wrong-chord").removeClass('show'); }, 3000);
}

function checkChord(chord) {
    return PATTERN.test(chord);
}

function semitoneHigher() {
    var input = $("#chord").val();
    if (checkChord(input)) {
        $("#chord").val(transpose(input, 0.5));
    } else {
        throwAlertWrongChord();
    }
}

function semitoneLower() {
    var input = $("#chord").val();
    if (checkChord(input)) {
        $("#chord").val(transpose(input, -0.5));
    } else {
        throwAlertWrongChord();
    }
}

function toneHigher() {
    var input = $("#chord").val();
    if (checkChord(input)) {
        $("#chord").val(transpose(input, 1));
    } else {
        throwAlertWrongChord();
    }
}

function toneLower() {
    var input = $("#chord").val();
    if (checkChord(input)) {
        $("#chord").val(transpose(input, -1));
    } else {
        throwAlertWrongChord();
    }
}

$(document).on("click", "#button-semitone-higher", semitoneHigher);
$(document).on("click", "#button-semitone-lower", semitoneLower);
$(document).on("click", "#button-tone-higher", toneHigher);
$(document).on("click", "#button-tone-lower", toneLower);