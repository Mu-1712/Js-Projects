function rollDice(){
    const numofdice = document.getElementById("numofdice").value
    const diceresult =  document.getElementById("diceresult")
    const imageresult =  document.getElementById("imageresult")
    const images = []
    const values = []

    for(let i=0; i<numofdice; i++){
        let value = Math.floor(Math.random() * 6) + 1;  
        values.push(value);
        images.push(`<img src = "diceimage/${value}.png" alt="Dice ${value}">`);
    }

    diceresult.textContent = `dice: ${values.join(', ')}`;
    imageresult.innerHTML = images.join(' ');
}