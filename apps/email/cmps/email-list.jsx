import { EmailPreview } from './email-preview.jsx'

export function EmailList({
  emails,
  onDeleteEmail,
  onMarkEmail,
  onSetIsStarred,
}) {
  return (
    <section className="email-list">
      {emails.map((email) => (
        <EmailPreview
          email={email}
          key={email.id}
          onDeleteEmail={onDeleteEmail}
          onMarkEmail={onMarkEmail}
          onSetIsStarred={onSetIsStarred}
        />
      ))}
    </section>
  )
}
