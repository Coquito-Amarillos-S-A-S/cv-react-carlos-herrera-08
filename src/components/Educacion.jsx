export default function Educacion({ estudios }) {
  return (
    <section>
      <h3>Educación y Talleres</h3>

      {estudios.map((est, i) => (
        <div key={i}>
          <strong>{est.titulo}</strong> — {est.institucion}
          <p>{est.periodo}</p>
        </div>
      ))}

      <hr />
    </section>
  );
}
