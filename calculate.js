document.addEventListener('DOMContentLoaded', () => {
    // Start Part 1 JS Code
    const generate_display = document.getElementById('generate_display');
    const generateButton = document.getElementById('generate_input');

    function generateKey() {
        let key = '';
        for (let i = 0; i < 6; i++) {
            key += Math.floor(Math.random() * 10);
        }
        return key;
    }

    generateButton.addEventListener('click', () => {
        // alert("DDD");
        const newKey = generateKey();
        generate_display.value = newKey;
        localStorage.setItem('generatedSecrateKey', newKey);
    });
    // Start Part 2 JS Code
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.input_btn');

    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonValue = event.target.value;

            if (buttonValue === 'X') {
                currentInput = currentInput.slice(0, -1);
            }
            else if (buttonValue === 'Clear') {
                currentInput = '';
            }
            else if (buttonValue === 'Submit') {
                let generateSecrateValue = localStorage.getItem('generatedSecrateKey');
                if (generateSecrateValue === currentInput) {
                    document.getElementById("fail_massage").style.display = "none";
                    document.getElementById("success_massage").style.display = "block";
                }
                else {
                    document.getElementById("success_massage").style.display = "none";
                    document.getElementById("fail_massage").style.display = "block";
                }
                console.log(generateSecrateValue);

                // alert(`Submitted value: ${currentInput}`);
            }
            else {
                if (currentInput.length < 6)
                    currentInput += buttonValue;
            }

            display.value = currentInput.length > 0 ? currentInput : '';
        });
    });
});
