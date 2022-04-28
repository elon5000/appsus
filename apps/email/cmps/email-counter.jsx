export function EmailCounter({ emails }) {
    this.state = {
        inboxMail: emails.map(email => email.category === 'inbox'),
        inboxUnreadMail: inboxMail.map(email => !email.isRead)
    }
    console.log('All mail:',this.state.inboxMail, 'Unread mail',this.state.inboxUnreadMail)

    return <section className="email-counter">
        <h2>Emails read {inboxMail.length}/{inboxUnreadMail.length} </h2>
    </section>
}