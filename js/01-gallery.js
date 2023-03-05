import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryContainer = document.querySelector('.gallery');

const imgElements = galleryItems.map( ({original, preview, description} )  => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`}).join('');

  galleryContainer.insertAdjacentHTML('beforeend', imgElements);


galleryContainer.addEventListener( 'click', onGalleryElementClick)

function onGalleryElementClick(event) {
    event.preventDefault();
    
    const target =event.target
    if(target.nodeName !== 'IMG') {
        return;
}
    const originalImageURL = target.dataset.source;

    const instance = basicLightbox.create(`
        <img src=${originalImageURL} >
        `)
        instance.show()
  };



console.log(galleryItems);
