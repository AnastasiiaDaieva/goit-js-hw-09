import closeModal from './closeModal.js'

import refs from './refs.js'
const { ulAccess, accessModal, originalImage, buttonAccess } = refs

export default function closeModalByKey(e) {
  if (e.code === 'Escape') {
    closeModal()
    console.log('Escape')
  }
}
