const lengthify = (name, functionDefinition) => {
    const nameLength = name.length
    functionDefinition(nameLength)
}
lengthify("Joy Gupta", (length) => console.log(`Your name is ${length} characters long`))