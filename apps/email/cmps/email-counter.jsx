export function EmailCounter({ emails }) {
  return (
    <section>
      <h2>
        Counter:
        {Math.floor(
          ((emails.length -
            emails.filter((email) => email.isRead === false).length) *
            100) /
            emails.length
        )}
        %
      </h2>
    </section>
  )
}
