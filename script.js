//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
            const inputValue = Number(document.getElementById("ip").value);
            const outputDiv = document.getElementById("output");

            if (isNaN(inputValue)) {
                outputDiv.textContent = "Please enter a valid number.";
                return;
            }

            new Promise((resolve) => {
                setTimeout(() => {
                    outputDiv.textContent = `Result: ${inputValue}`;
                    resolve(inputValue);
                }, 2000);
            })
            .then((num) => new Promise((resolve) => {
                setTimeout(() => {
                    num *= 2;
                    outputDiv.textContent = `Result: ${num}`;
                    resolve(num);
                }, 2000);
            }))
            .then((num) => new Promise((resolve) => {
                setTimeout(() => {
                    num -= 3;
                    outputDiv.textContent = `Result: ${num}`;
                    resolve(num);
                }, 1000);
            }))
            .then((num) => new Promise((resolve) => {
                setTimeout(() => {
                    num /= 2;
                    outputDiv.textContent = `Result: ${num}`;
                    resolve(num);
                }, 1000);
            }))
            .then((num) => new Promise((resolve) => {
                setTimeout(() => {
                    num += 10;
                    outputDiv.textContent = `Final Result: ${num}`;
                    resolve(num);
                }, 1000);
            }));
        });