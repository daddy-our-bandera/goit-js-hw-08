// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line// Описан в документации

const gallery = document.querySelector('.gallery');

const createMarkUp = galleryItems
  .map(
    ({ preview, original, description }) => `<a class="gallery__item"
       href="${original}">
       <img class="gallery__image"
       src="${preview}"
       alt="${description}" />
</a>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', createMarkUp);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
});
