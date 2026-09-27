import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { analysis } from '../data/content.js'

export default function AnalysisReflection() {
  return (
    <section id="analysis" className="section section--beige">
      <div className="container">
        <SectionHeader
          kicker="Our take"
          title="Analysis & Reflection"
          description={analysis.comparisonIntro}
        />

        <Reveal className="analysis-split">
          <div className="table-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Theme</th>
                  <th scope="col">Historical expectation</th>
                  <th scope="col">Contemporary expectation</th>
                </tr>
              </thead>
          <tbody>
  {analysis.comparisonRows.map((row) => (
    <tr key={row.theme}>
      <th scope="row">{row.theme}</th>

      <td>
        <p>{row.historical}</p>

        {row.historicalSources && row.historicalSources.length > 0 && (
          <p className="compare-table__sources">
            <strong>Sources:</strong>{' '}
            {row.historicalSources.map((source, index) => (
              <span key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.name} ↗
                </a>
                {index < row.historicalSources.length - 1 && ' · '}
              </span>
            ))}
          </p>
        )}
      </td>

      <td>
        <p>{row.contemporary}</p>

        {row.contemporarySources && row.contemporarySources.length > 0 && (
          <p className="compare-table__sources">
            <strong>Sources:</strong>{' '}
            {row.contemporarySources.map((source, index) => (
              <span key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.name} ↗
                </a>
                {index < row.contemporarySources.length - 1 && ' · '}
              </span>
            ))}
          </p>
        )}
      </td>
    </tr>
  ))}
</tbody>
            </table>
          </div>

          <aside className="pull-quote">
            <span className="pull-quote__mark" aria-hidden="true">&ldquo;</span>
            <p>{analysis.pullQuote}</p>
            <span className="pull-quote__attribution">{analysis.pullQuoteAttribution}</span>
          </aside>
        </Reveal>

        <Reveal className="analysis-callout" delay={80}>
          <span className="analysis-callout__label">{analysis.groupAnalysisLabel}</span>
          <p>{analysis.groupAnalysis}</p>
        </Reveal>

        <Reveal className="reflection" delay={120}>
          <h3>Reflection questions</h3>
          <ol>
            {analysis.reflectionQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
