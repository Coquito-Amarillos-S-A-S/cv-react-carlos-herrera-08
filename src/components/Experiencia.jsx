export default function Experiencia({ trabajos }) {
  return (
    <section>
      <h3>Experiencia</h3>
      {trabajos.map((t, index) => (
        <div key={index}>
          <h4>{t.empresa}</h4>
          <p>
            <strong>{t.cargo}</strong> - {t.año}
          </p>
          <ul>
            {t.funciones.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      ))}
      <hr />
    </section>
  );
}
