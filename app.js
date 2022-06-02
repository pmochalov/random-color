const $button = document.querySelector('button');
const $wrapper = document.querySelector('.wrapper');
const $result = $wrapper.querySelector('.result');


$button.addEventListener('click', (event) => {
    $result.innerText = '';
    $result.classList.remove('result_opened');
    $button.disabled = true;

    setTimeout(() => {
        let color = getRandColor();

        $wrapper.style.backgroundColor = color;
        $result.innerText = color;
        $result.classList.add('result_opened');
        $button.disabled = false;
    }, 500);

});


const getRandColor = () => {
    let data = {
        r: getRandInt().toString(16),
        g: getRandInt().toString(16),
        b: getRandInt().toString(16)
    };

    (data.r.length == 1) ? data.r = data.r.repeat(2) : data.r = data.r;
    (data.g.length == 1) ? data.g = data.g.repeat(2) : data.g = data.g;
    (data.b.length == 1) ? data.b = data.b.repeat(2) : data.b = data.b;

    return `#${data.r}${data.g}${data.b}`;
}


const getRandInt = (min = 0, max = 255) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

