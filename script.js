// Footer'dagi yilni avtomatik yangilash
document.getElementById("year").textContent = new Date().getFullYear();

// Rasm hali qo'yilmagan bo'lsa, "RA" bosh harflari ko'rinib turadi
const photo = document.querySelector(".photo img");
const hidePhoto = () => photo.remove();
if (photo.complete && photo.naturalWidth === 0) hidePhoto();
else photo.addEventListener("error", hidePhoto);
