import { createMurkup } from "./creat_murkup";

//list - ta, insertAdjacentHTML- добавляет разметку к уже существующей
export function addMurkup(ta, arr){
  const murkup= createMurkup(arr)
  ta.insertAdjacentHTML('beforeend', murkup);
}