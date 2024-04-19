import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchData } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const photoGallery = document.querySelector('.images-place');
const loadMoreButton = document.querySelector('.load-more');

let currentPage = 1;
let searchTerm = '';
let totalPages = 1;

const book = new SimpleLightbox('.card .place-for-image a', {
  captionsData: 'alt',
  captionDelay: 250,
});

loadMoreButton.style.display = 'none';

form.addEventListener('submit', handleSearch);
loadMoreButton.addEventListener('click', loadMoreImages);

async function handleSearch(event) {
  event.preventDefault();
  searchTerm = event.currentTarget.elements.inputSearch.value;
  currentPage = 1;
  totalPages = 1; // Reset total pages
  photoGallery.innerHTML = '';
  loader.style.display = 'block';
  try {
    const data = await fetchData(searchTerm, currentPage);
    if (data.totalHits === 0) {
      showErrorToast('Sorry, there are no images matching your search query. Please try again!');
    } else {
      totalPages = Math.ceil(data.totalHits / 15); 
      renderAndShowImages(data.hits);
      showLoadMoreButton();
      book.refresh();
    }
  } catch (error) {
    showErrorToast(`An error occurred: ${error.message}`);
    hideLoadMoreButton();
  } finally {
    loader.style.display = 'none';
  }
}

async function loadMoreImages() {
  currentPage++;
  loader.style.display = 'block';
  try {
    const data = await fetchData(searchTerm, currentPage);
    renderAndShowImages(data.hits);
    book.refresh();
    if (currentPage === totalPages) { 
      hideLoadMoreButton(); 
    }
  } catch (error) {
    showErrorToast(`An error occurred: ${error.message}`);
    hideLoadMoreButton(); 
  } finally {
    loader.style.display = 'none';
  }
}

function renderAndShowImages(images) {
  const html = renderImages(images);
  photoGallery.insertAdjacentHTML('beforeend', html);
}

function showErrorToast(message) {
  iziToast.error({
    title: 'Ops.',
    titleColor: 'white',
    message: message,
    messageColor: 'white',
    position: 'topCenter',
    timeout: 5000,
  });
}

function showLoadMoreButton() {
  loadMoreButton.style.display = 'block';
}

function hideLoadMoreButton() {
  loadMoreButton.style.display = 'none';
}
