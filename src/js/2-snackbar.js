import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector(".form")






form.addEventListener('submit', e =>{
    e.preventDefault()
const delay = Number(document.querySelector('[name="delay"]').value);
const resultState = document.querySelector('input[name="state"]:checked').value
    const resultPromise = new Promise((resolve, reject) =>{
        setTimeout(() =>
    {
    if(resultState === "fulfilled"){
        resolve(delay)}
        else{
           reject(delay); 
        }
    },delay);
});
  resultPromise   
.then(delay =>{
iziToast.success ({message: `Fulfilled promise in ${delay}ms`})
})
.catch(delay =>{
   iziToast.error({message:`Rejected promise in ${delay}ms`})
})
});




