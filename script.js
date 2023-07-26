function mixColors(color1, color2) {
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    switch (color1) {
        case 'red':
            switch (color2) {
                case 'blue':
                    result.innerText = 'purple';
                    break;
                case 'yellow':
                    result.innerText = 'orange';
                    break;
                default:
                    result.innerText = 'Invalid color combination';
                    break;
            }
            break;
        case 'blue':
            switch (color2) {
                case 'red':
                    result.innerText = 'purple';
                    break;
                case 'yellow':
                    result.innerText = 'green';
                    break;
                default:
                    result.innerText = 'Invalid color combination';
                    break;
            }
            break;
        case 'yellow':
            switch (color2) {
                case 'red':
                    result.innerText = 'orange';
                    break;
                case 'blue':
                    result.innerText = 'green';
                    break;
                default:
                    result.innerText = 'Invalid color combination';
                    break;
            }
            break;
        default:
            result.innerText = 'Invalid color combination';
            break;
    }
}


const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const result = document.getElementById('result');
const submit_btn = document.getElementById('submit_btn');
submit_btn.addEventListener('click', () => {
    mixColors(color1.value, color2.value
    );
});
