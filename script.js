document.querySelectorAll('.code').forEach((input, index, inputs) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (input.value === '') {
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        }
    });
});

