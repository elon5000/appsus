import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const carService = {
    getById,
    query,
    saveDraft,
    deleteEmail,
    getNextEmailId
}

const KEY = 'emailDB'

function query(filterBy) {
    let emails = _loadFromStorage()
    if (!emails) {
        emails = _createEmails()
        _saveToStorage(emails)
    }

    if (filterBy) {
        let { vendor, minSpeed, maxSpeed } = filterBy
        if (!minSpeed) minSpeed = 0;
        if (!maxSpeed) maxSpeed = Infinity
        cars = cars.filter(car =>
            car.vendor.includes(vendor) &&
            car.speed <= maxSpeed &&
            car.speed >= minSpeed)
    }

    return Promise.resolve(cars)
}

function getNextEmailId(emailId) {
    const emails = _loadFromStorage()
    const emailIdx = emails.findIndex(email => emailId === email.id)
    const nextEmailIdx = (emailIdx + 1 === email.length) ? 0 : emailIdx + 1
    return emails[nextEmailIdx].id
}

function getById(emailId) {
    const emails = _loadFromStorage()
    const email = emails.find(email => emailId === email.id)
    return Promise.resolve(email)
}

function deleteEmail(emailId) {
    let emails = _loadFromStorage()
    emails = emails.filter(email => email.id !== emailId)
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
    emails = emails.map(email => email.id === emailToUpdate.id ? emailToUpdate : email)
    _saveToStorage(emails)
    return Promise.resolve()
}


function _composeEmail() {
    return {
        id: utilService.makeId(),
        to: makeLorem(2),
        subject: makeLorem(5),
        content: makeLorem(100),
        img,
        ctg: (Math.random() > 0.5) ? 'Important' : 'Sales'
    }
}

function _createEmails() {
    const emails = []
    for (let i = 0; i < 10; i++) {
        emails.push(_composeEmail())
    }
    return emails
}

function _saveToStorage(emails) {
    storageService.saveToStorage(KEY, emails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}