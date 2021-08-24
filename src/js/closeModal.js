import refs from './refs.js'
const { ulAccess, accessModal, originalImage, buttonAccess } = refs

import clearOriginalImage from './clearOriginalImage.js'
import closeModalByKey from './closeModalByKey.js'

export default function closeModal() {
  accessModal.classList.remove('is-open')
  clearOriginalImage()
  window.removeEventListener('keydown', closeModalByKey)
  // console.log(originalImage)
}
