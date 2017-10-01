$(document).ready(function() {
    const PATTERN = /^[A-G](b|#)?((m|maj|M|add|aug|dim|sus)([2-7]|9|11|13)?)?(\/[A-G](b|#)?)?$/i;

    function transposeIndividualChord(tone) {
        var input = $("#individual-chord").val();
        if (PATTERN.test(input)) {
            $("#individual-chord").val(transpose(input, tone));
        } else {
            $("#alert-individual-wrong-chord").addClass('show');
            setTimeout(function() { $("#alert-individual-wrong-chord").removeClass('show'); }, 3000);
        }
    }

    $("#btn-individual-semitone-higher").click(function() { transposeIndividualChord(0.5) });
    $("#btn-individual-semitone-lower").click(function() { transposeIndividualChord(-0.5) });
    $("#btn-individual-tone-higher").click(function() { transposeIndividualChord(1) });
    $("#btn-individual-tone-lower").click(function() { transposeIndividualChord(-1) });
});