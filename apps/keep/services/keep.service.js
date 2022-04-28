import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'
import keepsData from '../data.js'

export const keepService = {
  query,
  getById,
  saveKeep,
  deleteKeep,
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
  keep.type = ''
  keep.backgroundColor = 'white'
  keep.file = ''
  keeps.unshift(keep)
  _saveToStorage(keeps)
  return Promise.resolve()
}

function deleteKeep(keepId) {
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