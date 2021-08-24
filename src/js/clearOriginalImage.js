import refs from './refs.js'
const { ulAccess, accessModal, originalImage, buttonAccess } = refs

export default function clearOriginalImage() {
  originalImage.src = ''
}
