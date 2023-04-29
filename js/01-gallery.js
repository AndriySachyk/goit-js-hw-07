
import { galleryItems } from "./gallery-items.js";


const listGalleryUl = document.querySelector(".gallery");

const itemLi = ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href=${original} data-original-img=${original}>
    <img
      class="gallery__image"
      src="${preview}"
    //   data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;

listGalleryUl.innerHTML = galleryItems.map(itemLi).join('')


const arryInstances = [];


listGalleryUl.addEventListener('click', (even) => {
    even.preventDefault()
    const originalLink = even.target
        .closest(".gallery__item")
        .getAttribute("data-original-img");
    
    const instance = basicLightbox.create(`<img scr=${original} >`);
    arryInstances.push(originalLink);
    originalLink.show()
    document.addEventListener("keydown", (even) => onEsc(even, instance))
});


const onEsc = (even, instance)=> {
    const escCode = "Escape";
    if (even.code === escCode) {
        instance.close();
        arryInstances.splice(arryInstances.indexOf(instance), 1)
    
        document.removeEventListener("keydown", (even) => onEsc(even, instance))
    }
}