let currentDisplay = '0';
        let memory = 0;
        let operator = null;

        function updateDisplay() {
            document.querySelector('.resultBox').innerText = currentDisplay;
        }

        function appendNumber(number) {
            if (currentDisplay === '0' && number !== '.') {
                currentDisplay = number;
            } else {
                currentDisplay += number;
            }
            updateDisplay();
        }

        function setOperation(op) {
            if (operator !== null) {
                calculate();
            }
            operator = op;
            memory = parseFloat(currentDisplay);
            currentDisplay = '0';
        }

        function calculate() {
            if (operator === null) return;
            const current = parseFloat(currentDisplay);
            if (operator === '+') {
                currentDisplay = memory + current;
            } else if (operator === '-') {
                currentDisplay = memory - current;
            } else if (operator === '/') {
                currentDisplay = memory / current;
            } else if (operator === '*') {
                currentDisplay = memory * current;
            }
            operator = null;
            memory = 0;
            updateDisplay();
        }

        function reset() {
            currentDisplay = '0';
            memory = 0;
            operator = null;
            updateDisplay();
        }

        function deleteLast() {
            currentDisplay = currentDisplay.slice(0, -1);
            if (currentDisplay === '') {
                currentDisplay = '0';
            }
            updateDisplay();
        }