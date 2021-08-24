export default function createItem(preview, original, description) {
  return `
  <li class="gallery__item">
    <img class="gallery__image" src="${preview}" data-original="${original}" alt="${description}"/>
  </li>
  `
}
