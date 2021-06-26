const catchProfileImg = document.querySelector('.aside-owner');
const catchBtnOurStore = document.querySelector('.btn-our-store');
const changeProfileImg = () => {
    catchProfileImg.addEventListener('mouseover', (event) => {
        catchProfileImg.setAttribute('src','src/img/wisuda.JPG');
    })
}

const returnProfileImg = () => {
    catchProfileImg.addEventListener('mouseleave', (event) => {
        catchProfileImg.setAttribute('src', 'src/img/owner2.jpg')
    })
}

const changeColorBtn = () => {
    catchBtnOurStore.addEventListener('mouseover', (event) => {
        event.target.style.boxShadow = "0 4px 8px 0";
    })
}

changeProfileImg();
returnProfileImg();