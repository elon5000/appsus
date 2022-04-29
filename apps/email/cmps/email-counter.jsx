export function EmailCounter({ emails }) {
  const getEmails = Math.floor(
    ((emails.length - emails.filter((email) => email.isRead === false).length) *
      100) /
      emails.length
  )

  return (
    <section className="email-counter">
      <div className="email-progress-wrapper">
        <div className="progress-inside" style={{ width: `${getEmails}%` }}>
          {getEmails}%
        </div>
      </div>
    </section>
  )
}
