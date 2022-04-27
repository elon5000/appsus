import { CarPreview } from './car-preview.jsx'

export function EmailList({ emails }) {
    return <section className="email-list flex">
        {emails.map(email => <CarPreview email={email} key={email.id} />)}
    </section>
}