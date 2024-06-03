window.onload = () => {
    const consoleLogButton = document.querySelector('#console-log');
    const consoleErrorButton = document.querySelector('#console-error');
    const consoleCountButton = document.querySelector('#console-count');
    const consoleWarnButton = document.querySelector('#console-warn');
    const consoleAssertButton = document.querySelector('#console-assert');
    const consoleClearButton = document.querySelector('#console-clear');
    const consoleDirButton = document.querySelector('#console-dir');
    const consoleDirXMLButton = document.querySelector('#console-dirxml');
    const consoleGroupStartButton = document.querySelector('#console-group-start');
    const consoleGroupEndButton = document.querySelector('#console-group-end');
    const consoleTableButton = document.querySelector('#console-table');
    const startTimerButton = document.querySelector('#start-timer');
    const endTimerButton = document.querySelector('#end-timer');
    const consoleTraceButton = document.querySelector('#console-trace');
    const globalErrorButton = document.querySelector('#trigger-global-error');
    const calculateButton = document.querySelector('#calculate');



    consoleLogButton.addEventListener('click', () => {
        console.log('Console Log Demo');
    });
    consoleErrorButton.addEventListener('click', () => {
        console.error('Console Error Demo');
    });
    consoleCountButton.addEventListener('click', () => {
        console.count('Console Count Demo');
    });
    consoleWarnButton.addEventListener('click', () => {
        console.log('Console Warn Demo');
    });
    consoleAssertButton.addEventListener('click', () => {
        const x = 5;
        const y = 3;
        const reason = 'Console Assert Demo: Should be false';
        console.assert(x < y, { x, y, reason });
    });
    consoleClearButton.addEventListener('click', () => {
        console.clear('Console Warn Demo');
    });
    consoleDirButton.addEventListener('click', () => {
        console.dir(document.head);
    });
    consoleDirXMLButton.addEventListener('click', () => {
        console.dirxml(document);
    });
    consoleGroupStartButton.addEventListener('click', () => {
        console.group('Console Group Demo');
    });
    consoleGroupEndButton.addEventListener('click', () => {
        console.groupEnd('Console Group Demo');
    });
    consoleTableButton.addEventListener('click', () => {
        const people = [
            {
                name: 'Pranav',
                year: 3
            },
            {
                name: 'Jesus',
                year: 2
            },
            {
                name: 'Cameron',
                year: 4
            }
        ]
        console.table(people);
    });
    startTimerButton.addEventListener('click', () => {
        console.time();
    });
    endTimerButton.addEventListener('click', () => {
        console.timeEnd();
    });
    consoleTraceButton.addEventListener('click', () => {
        console.trace();
    });
}

function validateInput() {
    const firstNumInput = document.querySelector('#first-num');
    const secondNumInput = document.querySelector('#second-num');
    if (!isNumeric(firstNumInput.value)) {
        throw new OperandError('Invalid First Input');
    }
    if (!isNumeric(secondNumInput.value)) {
        throw new OperandError('Invalid Second Input');
    }
}

// used code from https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number to check for numeric strings
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

class OperandError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "OperandError"; // (2)
    }
}