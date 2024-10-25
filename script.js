
let arrImage = [
    "./img/templates/alps-8345488_1280.jpg",
    "./img/templates/city-7403001_1280.jpg",
    "./img/templates/desert-7630943_1280.jpg",
    "./img/templates/forbidden-city-8385647_1280.png",
    "./img/templates/mountains-7777164_1280.jpg",
    "./img/templates/pagoda-8612554_1280.jpg",
    "./img/templates/river-8279466_1280.jpg",
    "./img/templates/sea-7705679_1280.jpg",
    "./img/templates/sunset-7760143_1280.jpg",
    "./img/templates/nature-7175030_1280.jpg"
]

function render(){
    let images = document.getElementById('image_container');

    for (let i = 0; i < arrImage.length; i++) {
        images.innerHTML += renderHTML(i);
    }
}

function renderHTML(i){
    return /*html*/ `
        <img onclick="openDialog(${i})" class="images" src="${arrImage[i]}">
    `
}

function openDialog(i){
    let element = document.getElementById('overlay');
    element.classList.remove('d_none'); 
    element.innerHTML = '';
    element.innerHTML += htmlDialog(i);
}

function htmlDialog(i){
    return /*html*/ `
    <div class="overlay_dialog">
        <div class="currentImage">
            <img src="./img/reject.png" onclick="closeDialog()" class="cross">
            <img onclick="previousImage(${i})" src="./img/left-chevron.png" alt="" class="chevron left_chevron">
            <img onclick="nextImage(${i})" src="${arrImage[i]}" class="dialogImg cursor">
            <img onclick="nextImage(${i})" src="./img/right-chevron.png" alt="" class="chevron right_chevron">
        </div>
    </div>
`
}
function closeDialog(){
    document.getElementById('overlay').classList.add('d_none');
}

function previousImage(i){
    let index = (i-1 + arrImage.length) % arrImage.length;
    openDialog(index);
}

function nextImage(i){
    let index = (i+1) % arrImage.length;
    openDialog(index);
}

