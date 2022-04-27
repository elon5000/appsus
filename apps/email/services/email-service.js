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
}

const KEY = 'emailDB'

function query(filterBy) {
  let emails = _loadFromStorage()
  if (!emails) {
    emails = _createEmails()
    _saveToStorage(emails)
  }

  // if (filterBy) {
  //     let { isInbox, isSent, isDtaft, isStarred } = filterBy
  //     if (!inbox) inbox = true;
  //     emails = emails.filter(email =>
  //         email.vendor.includes(vendor) &&
  //         email.speed <= maxSpeed &&
  //         email.speed >= minSpeed)
  // }

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
  email.category = 'sent'
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
  if (email.id) return _update(email)
  else return _add(email)
}

function _add(emailToAdd) {
  let emails = _loadFromStorage()
  const email = _createEmails()
  emails = [email, ...emails]
  _saveToStorage(emails)
  return Promise.resolve()
}

function _update(emailToUpdate) {
  let emails = _loadFromStorage()
  emails = emails.map((email) =>
    email.id === emailToUpdate.id ? emailToUpdate : email
  )
  _saveToStorage(emails)
  return Promise.resolve()
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

function _createEmails() {
  const emails = emailsData
  return emails
}

function _saveToStorage(emails) {
  storageService.saveToStorage(KEY, emails)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}
