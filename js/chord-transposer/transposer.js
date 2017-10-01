const NOTES_HIGHER = {
    'Cb': 'C',
    'C': 'C#',
    'C#': 'D',
    'Db': 'D',
    'D': 'Eb',
    'D#': 'E',
    'Eb': 'E',    
    'E': 'F',
    'E#': 'A',
    'Fb': 'F',
    'F': 'F#',
    'F#': 'G',
    'Gb': 'G',
    'G': 'G#',
    'G#': 'A',
    'Ab': 'A',  
    'A': 'Bb',
    'A#': 'B',
    'Bb': 'B',
    'B': 'C',
    'B#': 'A'
};

const NOTES_LOWER = {
    'Cb': 'Bb',
    'C': 'B',
    'C#': 'C',
    'Db': 'C',
    'D': 'C#',
    'D#': 'D',
    'Eb': 'D',    
    'E': 'Eb',
    'E#': 'G',
    'Fb': 'D#',
    'F': 'E',
    'F#': 'F',
    'Gb': 'F',
    'G': 'F#',
    'G#': 'G',
    'Ab': 'G',  
    'A': 'G#',
    'A#': 'A',
    'Bb': 'A',
    'B': 'Bb',
    'B#': 'G'
};

const CHORD = /^[A-G](b|#)?/i;
const BAR = /\//g;

/**
 * Transpose a chord higher or lower. Separate it before if it is a bar chord to transpose
 * them individually
 * @param {string} chord - Chord to transpose
 * @param {number} tone - How much tones it will be transposed (-1, -0.5, 0.5 or 1)
 * @return {string} - Resultant chord
 */
function transpose(chord, tone) {
    var bar = BAR.exec(chord);
    return bar !== null 
        ? transposeIndividualChord(chord.slice(0, bar.index), tone) + "/" + transposeIndividualChord(chord.slice (bar.index + 1), tone) 
        : transposeIndividualChord(chord, tone);
}

/**
 * Transpose individual chord higuer or lower
 * @param {string} chord - Chord to transpose
 * @param {number} tone - How much tones it will be transposed (-1, -0.5, 0.5 or 1)
 * @return {string} - Resultant chord
 */
function transposeIndividualChord(chord, tone) {
    var note = CHORD.exec(chord)[0];
    var decorators = chord.slice(note.length);
    var result;
    switch (tone) {
        case -1: 
            result = NOTES_LOWER[NOTES_LOWER[note]];
            break;

        case -0.5:
            result = NOTES_LOWER[note];
            break;

        case 0.5:
            result = NOTES_HIGHER[note];
            break;

        case 1:
            result = NOTES_HIGHER[NOTES_HIGHER[note]];
            break;

        default:
            result = chord;
    }
    return result + decorators;
}