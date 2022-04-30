import { KeepPreview } from './keep-preview.jsx'

export function KeepList({
  keeps,
  onDeleteKeep,
  onCopyKeep,
  onPinKeep,
  onSendAsEmail,
}) {
  return (
    <section className="keep-list grid">
      {keeps.map((keep) => (
        <KeepPreview
          keep={keep}
          key={keep.id}
          onDeleteKeep={onDeleteKeep}
          onCopyKeep={onCopyKeep}
          onPinKeep={onPinKeep}
          onSendAsEmail={onSendAsEmail}
        />
      ))}
    </section>
  )
}
