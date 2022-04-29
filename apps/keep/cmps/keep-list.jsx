import { KeepPreview } from './keep-preview.jsx'

export function KeepList({ keeps, onDeleteKeep }) {
  return (
    <section className="keep-list grid">
      {keeps.map((keep) => (
        <KeepPreview keep={keep} key={keep.id} onDeleteKeep={onDeleteKeep} />
      ))}
    </section>
  )
}
