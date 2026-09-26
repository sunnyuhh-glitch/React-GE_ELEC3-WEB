export default function SectionHeader({ kicker, title, description }) {
  return (
    <div className="section-header">
      {kicker && <span className="section-header__kicker">{kicker}</span>}
      <h2>{title}</h2>
      <hr className="section-header__rule" />
      {description && <p>{description}</p>}
    </div>
  )
}
