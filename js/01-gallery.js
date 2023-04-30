
import { galleryItems } from "./gallery-items.js";

const galleryUl = document.querySelector(".gallery");


const createGalleryItems = createItemLi(galleryItems)

galleryUl.insertAdjacentHTML("beforeend", createGalleryItems);

galleryUl.addEventListener('click', clickGalleryItem)

function createItemLi(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
  }).join('');
}


function clickGalleryItem(even) {
  even.preventDefault();

  if (even.target.nodeName !== 'IMG') {
    return
  };
const galleryLink = even.target.dataset.source;

  console.log(galleryLink)
const instance = basicLightbox.create(`
    <img src=${galleryLink} width="800" height="600">`,
{
    onShow: (instance) => {
    window.addEventListener('keydown', escCloseModal)
    },
  onClose: (instance) =>{
    window.removeEventListener('keydown', escCloseModal)
    }
});

function escCloseModal(even) {
  if (even.code === "Escape") {
    instance.close()
  }
}

instance.show();
}
