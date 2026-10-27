export function createMurkup(photo){
  const murkup = photo.map((img)=>`<div class='photo-card'>
  <a href="${img.urls.regular}">
  <img class ='photo' src='${img.urls.small}' alt='${img.alt_description}'/>
  </a>
<div class='info'>
 <p class="info-item"><b>Likes</b><span> ${img.likes}</span></p>
<div class='info'>
 <p class="info-item"><b>User</b><span> ${img.user.name}</span></p>
</div>
  </div>`).join('')
  return murkup
}