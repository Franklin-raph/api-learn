async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice', {
        method: "GET"
    })
    const data = await response.json()
    console.log(data);
    document.querySelector('h1').textContent = data.slip.advice
    document.querySelector('p').textContent = data.slip.id
}

getAdvice()