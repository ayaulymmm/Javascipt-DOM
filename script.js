const p = document.querySelector('p');
Array.from(document.querySelectorAll('p'))
    .forEach(para => {
        p.innerHTML = p.innerHTML
            .replace('?', '🤔')
            .replace('!', '😲')
    })