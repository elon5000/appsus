import { EmailPreview } from './email-preview.jsx'

export function EmailList({ emails, onDeleteEmail, onMarkEmail }) {
  return (
    <section className="email-list">
      {emails.map((email) => (
        <EmailPreview
          email={email}
          key={email.id}
          onDeleteEmail={onDeleteEmail}
          onMarkEmail={onMarkEmail}
        />
      ))}
    </section>
  )
}
