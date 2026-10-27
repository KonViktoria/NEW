import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { GetImages } from './js/fech_info';
import {searchFormInput, list, button, searchForm} from './js/refs'
import { addMurkup } from './js/add_murcup';

const getPhoto= new GetImages()

const onInput=(event)=>{
getPhoto.searchName(event.target.value)

}

searchFormInput.addEventListener('input',onInput) //передаю ссыдку onInput, если onInput() то сразу вызовится это не правильно


const onSubmit = async (event)=>{
  event.preventDefault()
const data = await getPhoto.getInfo(getPhoto.name)
console.log(data);

}
searchForm.addEventListener("submit",onSubmit)

function clearMurkup(){
  list.innerHTML=""
  getPhoto.pageStartPosition()
  button.classList.add('is-hidden')
}

//is-hidden это стили которые используются для кнопки показать/спрятать