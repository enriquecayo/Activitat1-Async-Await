function getRandomSlow(callback, delayMs = 1000) {
    setTimeout(
        () => callback(Math.floor(Math.random() * 101)), 
        delayMs
    );
}

function getRandomPromise() {
    return new Promise((resolve) => {
        getRandomSlow((numero) => {
            resolve(numero);
        });
    });
}

function provaPartA() {
    return new Promise((resolve) => {
        console.log("Part A (Callback)");
        console.log("1");
        
        getRandomSlow((numero) => {
            console.log(numero);
            resolve();
        });

        console.log("2");
    });
}

async function provaPartB() {
    console.log("Part B (Async/Await)");
    console.log("1");

    const numero = await getRandomPromise();
    
    console.log(numero);
    console.log("2");
}

async function main() {
    await provaPartA();
    await provaPartB();
}

main();