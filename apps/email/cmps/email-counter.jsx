export function EmailCounter({ emails }) {
  return (
    <section className="email-counter">
      <div className="email-progress-wrapper">
        <div className="progress-inside">
          {Math.floor(
            ((emails.length -
              emails.filter((email) => email.isRead === false).length) *
              100) /
              emails.length
          )}
          %
        </div>
      </div>
    </section>
  )
}
