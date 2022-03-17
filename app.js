let title = document.querySelector('#quote_head'),
    quote = document.querySelector('#quote'),
    btn = document.querySelector('button');
const advice = async() => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    title.innerHTML = `advice #${data.slip.id}`;
    quote.innerHTML = `"${data.slip.advice}"`;
};
advice();
btn.addEventListener('click', advice);