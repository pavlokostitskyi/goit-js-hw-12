export function renderImages(images) {
  return images.map(image => `
    <li class="card">
        <div class="place-for-image">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" class="picture"/>
            </a>
        </div>
        <div class="info-text">
            <div class="description">
                <span class="bold-text">Likes</span>
                <span class="info-value">${image.likes}</span>
            </div>
            <div class="description">
                <span class="bold-text">Views</span>
                <span class="info-value">${image.views}</span>
            </div>
            <div class="description">
                <span class="bold-text">Comments</span>
                <span class="info-value">${image.comments}</span>
            </div>
            <div class="description">
                <span class="bold-text">Downloads</span>
                <span class="info-value">${image.downloads}</span>
            </div>
        </div>
    </li>
  `).join('');
}
