
const catchProfileImg = document.querySelector('.aside-owner');
const catchBtnOurStore = document.querySelector('.btn-our-store');
const catchEveryBtnClass = document.querySelectorAll('.btn');





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

const showSwalAlert = () => {
try {

    for(const btnClass of catchEveryBtnClass) {
        btnClass.addEventListener('click',(event) => {
                const target = event.target;
                try {
                if(target.classList.contains('btn-our-store')) {
                    Swal.fire({
                        title: 'Hi, Im the owner',
                        text: 'Sorry, Our Store is under constructor ',
                        imageUrl: 'src/img/owner.jpg',
                        imageWidth: 300,
                        imageHeight: 300,
                        imageAlt: 'Custom image',
                      })
                    return;
                }
           

          
                if(target.classList.contains('cta-1')) {
                    Swal.fire({
                        title: 'Hi, Im the owner',
                        text: 'You can check and buy our shoes stock on Tokopedia ',
                        imageUrl: 'src/img/owner.jpg',
                        imageWidth: 300,
                        imageHeight: 300,
                        imageAlt: 'Custom image',
                      })
                      return;
                }
          
                  
                if(target.classList.contains('cta-2')) {
                    Swal.fire({
                        title: 'Andesta Febrianto Nainggolan',
                        text: 'The owner of Brians Dream Shoes Shop ',
                        imageUrl: 'src/img/owner.jpg',
                        imageWidth: 300,
                        imageHeight: 300,
                        imageAlt: 'Custom image',
                        
                      })
                   return;
                }
            }catch (error) {
                alert(error.message);
            }
        });
    }
} catch(error) {
    alert(error.message);
}
}





showSwalAlert();
changeProfileImg();
returnProfileImg();
