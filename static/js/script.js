//Challemge 1: your age in days
function ageInDays() {
    let birthYear = prompt('What year were you born... good friend?')

    let ageInDayss = (2021 - birthYear) * 365;
    
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    //alert(ageInDayss);

}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Callenge 2: Cat generator

function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

