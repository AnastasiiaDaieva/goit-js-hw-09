//  imports
import galleryItems from './photo-materials.js'
import createItem from './createItem.js'
import closeModal from './closeModal.js'
import closeModalByKey from './closeModalByKey.js'

// getting access
import refs from './refs.js'
const { ulAccess, accessModal, originalImage, buttonAccess } = refs

// loop for building the gallery
const items = galleryItems.map(item => {
  const { preview, original, description } = item
  const element = createItem(preview, original, description)
  // console.log(element)
  return element
})
// console.log(getActiveIndex(items))
const addElements = items.join('')
ulAccess.insertAdjacentHTML('beforeend', addElements)

// event listeners
ulAccess.addEventListener('click', e => {
  if (e.target.nodeName === 'IMG') {
    accessModal.classList.add('is-open')
    window.addEventListener('keydown', closeModalByKey)
    originalImage.src = e.target.dataset.original
    originalImage.alt = e.target.alt
    // console.log(originalImage)
  }
})

// closing the modal window

buttonAccess.addEventListener('click', closeModal)

accessModal.addEventListener('click', e => {
  if (e.target !== originalImage) {
    closeModal()
  }
})
// slider

// imported functions

// function createItem(preview, original, description) {
//   return `
//   <li class="gallery__item">
//     <img class="gallery__image" src="${preview}" data-original="${original}" alt="${description}"/>
//   </li>
//   `
// }

// function closeModal() {
//   accessModal.classList.remove('is-open')
//   clearOriginalImage()
//   window.removeEventListener('keydown', closeModalByKey)
//   // console.log(originalImage)
// }

// function closeModalByKey(e) {
//   if (e.code === 'Escape') {
//     closeModal()
//     console.log('Escape')
//   }
// }

// function clearOriginalImage() {
//   originalImage.src = ''
// }

// for slider

// function getCurrentIndex(arr, elem) {
//   return arr.findIndex(img => img.original === elem.src)
// }
