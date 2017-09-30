var NOTES_HIGHER={
    'C': 'C#',4
    'C#': 'D',
    'D': 'Eb',
    'Eb': 'E',    
    'E': 'F',
    'F': 'F#',
    'F#': 'G',
    'G': 'G#',
    'G#': 'A',    
    'A': 'Bb',
    'Bb': 'B',
    'B': 'C'
};

/**
 * Transpose a chord higher or lower
 * @param {string} chord - Chord to transpose
 * @param {number} tone - How much tones it will be transposed (-1, -0.5, 0.5 or 1)
 * @return {string} - Resultant chord
 */
function transpose(chord, tone) {
    var result;

    switch(tone) {
        case -1: 
            result = NOTES_LOWER[NOTES_LOWER[chord]];
            break;

        case -0.5:
            result = NOTES_LOWER[chord];
            break;

        case 0.5:
            result = NOTES_HIGHER[chord];
            break;

        case 1:
            result = NOTES_HIGHER[NOTES_HIGHER[chord]];
            break;

        default:
            result = 'unknown';
    }
    return result;
}