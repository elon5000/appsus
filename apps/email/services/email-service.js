import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

import emailsData from './data.js'

export const emailService = {
  getById,
  query,
  saveDraft,
  deleteEmail,
  getNextEmailId,
  saveEmail,
  saveDraft,
  changeRead,
}

const KEY = 'emailsDB'

function query(sortBy) {
  let emails = _loadFromStorage()
  if (!emails) {
    emails = _createEmails()
    _saveToStorage(emails)
  }

  if (sortBy) {
    emails = emails.filter((email) => email.status === sortBy)
  }

  return Promise.resolve(emails)
}

function getNextEmailId(emailId) {
  const emails = _loadFromStorage()
  const emailIdx = emails.findIndex((email) => emailId === email.id)
  const nextEmailIdx = emailIdx + 1 === email.length ? 0 : emailIdx + 1
  return emails[nextEmailIdx].id
}

function getById(emailId) {
  const emails = _loadFromStorage()
  const email = emails.find((email) => emailId === email.id)
  return Promise.resolve(email)
}

function saveEmail(newEmail) {
  const emails = _loadFromStorage()
  const email = newEmail
  email.id = utilService.makeId()
  email.isRead = false
  email.sentAt = new Date()
  email.status = 'sent'
  email.isStar = false
  email.file = ''
  emails.unshift(email)
  _saveToStorage(emails)
  return Promise.resolve()
}

function deleteEmail(emailId) {
  let emails = _loadFromStorage()
  emails = emails.filter((email) => email.id !== emailId)
  _saveToStorage(emails)
  return Promise.resolve()
}

function saveDraft(email) {
  if (email.id) return _updateDraft(email)
  else return _addDraft(email)
}

function _updateDraft(updateEmail) {
  let emails = _loadFromStorage()
  updateEmail.sentAt = new Date()
  emails = emails.map((email) =>
    email.id === updateEmail.id ? updateEmail : email
  )
  _saveToStorage(emails)
}

function _addDraft(addDraft) {
  let emails = _loadFromStorage()
  addDraft.id = utilService.makeId()
  updateEmail.isRead = false
  updateEmail.sentAt = new Date()
  updateEmail.status = 'draft'
  updateEmail.isStar = false
  updateEmail.file = ''
  _saveToStorage(emails)
}

function changeRead(emailId) {
  const emails = _loadFromStorage()
  const email = emails.find((email) => email.id === emailId)
  if (email.isRead) email.isRead = false
  else email.isRead = true
  _updateEmail(email)
  return Promise.resolve()
}

function _createEmails() {
  const emails = emailsData
  return emails
}

function _updateEmail(emailToUpdate) {
  let emails = _loadFromStorage()
  emails = emails.map((email) =>
    email.id === emailToUpdate.id ? emailToUpdate : email
  )
  _saveToStorage(emails)
  return Promise.resolve()
}

function _saveToStorage(emails) {
  storageService.saveToStorage(KEY, emails)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}

// function _creatEmail() {
//   return {
//     id: utilService.makeId(),
//     to: makeLorem(2),
//     subject: makeLorem(5),
//     content: makeLorem(100),
//     img,
//     ctg: Math.random() > 0.5 ? 'Important' : 'Sales',
//     isInbox: true,
//     isStarred: false,
//   }
// }
