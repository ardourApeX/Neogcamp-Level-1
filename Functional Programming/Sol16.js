const curryingFunction = (name) => (message = "Welcome") => console.log(`${message} ${name}`);
curryingFunction("Joy")()