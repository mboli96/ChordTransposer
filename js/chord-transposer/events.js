function semitoneHigher() {
    $("#chord").val(transpose($("#chord").val(), 0.5));
}

function semitoneLower() {
    $("#chord").val(transpose($("#chord").val(), -0.5));
}

function toneHigher() {
    $("#chord").val(transpose($("#chord").val(), 1));
}

function toneLower() {
    $("#chord").val(transpose($("#chord").val(), -1));
}

$(document).on("click", "#button-semitone-higher", semitoneHigher);
$(document).on("click", "#button-semitone-lower", semitoneLower);