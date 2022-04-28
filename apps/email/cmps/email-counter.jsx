export function EmailCounter({ emails }) {
  return (
    <section>
      <h2>
        Counter:{' '}
        {emails.map((email) => {
          email.isRead === false
        })}
      </h2>
    </section>
  )
}
