import { EmailPreview } from './email-preview.jsx'

export function EmailList({ emails }) {
  return (
    <section className="email-list">
      {emails.map((email) =>
        email.category === 'draft' || email.category === 'sent' ? null : (
          <EmailPreview email={email} key={email.id} />
        )
      )}
    </section>
  )
}
