export function EmailCounter({ emails }) {
  let getEmails = Math.floor(
    ((emails.length - emails.filter((email) => email.isRead === false).length) *
      100) /
      emails.length
  )

  return (
    <section className="email-counter" style={{ width: `${getEmails}%` }}>
      <div className="email-progress-wrapper">
        <div className="progress-inside">{getEmails}%</div>
      </div>
    </section>
  )
}
