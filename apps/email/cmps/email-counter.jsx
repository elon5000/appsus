import { emailService } from '../services/email-service.js'

export function EmailCounter() {
    const inboxEmails = emailService.query('inbox')
        .then(this.state = {
            inboxUnreadMail: inboxEmails.map(email => !email.isRead)
        })
    console.log('All mail:', inboxEmails.length, 'Unread mail', this.state.inboxUnreadMail)

    return <section className="email-counter">
        <h2>Emails read {inboxEmails.length}/{inboxUnreadMail.length}</h2>
    </section>
}