import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'
import keepsData from './data.js'

export const keepService = {
  query,
  getById,
  saveKeep,
  removeKeep,
}

const KEY = 'keepsDB'

function query(filterBy) {
  let keeps = _loadFromStorage()
  if (!keeps) {
    keeps = _createKeeps()
    _saveToStorage(keeps)
  }
  return Promise.resolve(keeps)
}

function getById(keepId) {
  const keeps = _loadFromStorage()
  const keep = keeps.find((keep) => keepId === keep.id)
  return Promise.resolve(keep)
}

function saveKeep(newKeep) {
  const keeps = _loadFromStorage()
  const keep = newKeep
  keep.id = utilService.makeId()
  keep.isPinned = false
  keep.createdAt = new Date()
  // keep.type = _setKeepType(keep)
  keeps.unshift(keep)
  _saveToStorage(keeps)
  return Promise.resolve()
}

// function _setKeepType(keep) {
//   const types = []
//   const file = keep.file
//   let fileType = ''
//   let txtType = ''
//   let listType = ''
//   if (file.includes('.jpg', '.gif')) {
//     fileType = 'note-img'
//   } else if (file.includes('.mp3', '.wav')) {
//     fileType = 'note-audio'
//   }
//   else if (file.includes('.mp4')) {
//     fileType = 'note-video'
//   }
//   else if (keep.txt) {
//     txtType = 'note-txt'
//   }
//   else if (keep.txt.includes('<ul>')) {
//     listType = 'note-list'
//   }
//   types.push(fileType,txtType,listType)
// }

function removeKeep(keepId) {
  let keeps = _loadFromStorage()
  keeps = keeps.filter((keep) => keep.id !== keepId)
  _saveToStorage(keeps)
  return Promise.resolve()
}

function _add(keepToAdd) {
  let keeps = _loadFromStorage()
  const keep = _createEmails()
  keeps = [keep, ...keeps]
  _saveToStorage(keeps)
  return Promise.resolve()
}

function _update(keepToUpdate) {
  let keeps = _loadFromStorage()
  keeps = keeps.map((keep) =>
    keep.id === keepToUpdate.id ? keepToUpdate : keep
  )
  _saveToStorage(keeps)
  return Promise.resolve()
}

function _createKeeps() {
  const keeps = keepsData
  return keeps
}

function _saveToStorage(keeps) {
  storageService.saveToStorage(KEY, keeps)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}
