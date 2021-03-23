const willThanosKillMe = (name, alive, kill) => {
    name.length % 2 === 0 ? alive() : kill()
}
willThanosKillMe("Joy", () => console.log("Yeah I am alive"), () => console.log("Give my headphones to my sister"))