import { EmailPreview } from './email-preview.jsx'

export function EmailList({
  emails,
  sortBy,
  filterBy,
  onDeleteEmail,
  onMarkEmail,
}) {
  return (
    <section className="email-list">
      {emails.map((email) => (
        <EmailPreview
          email={email}
          key={email.id}
          sortBy={sortBy}
          filterBy={filterBy}
          onDeleteEmail={onDeleteEmail}
          onMarkEmail={onMarkEmail}
        />
      ))}
    </section>
  )
}
