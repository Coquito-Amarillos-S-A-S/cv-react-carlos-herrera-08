// src/components/StackTecnologias.jsx

export default function StackTecnologias({ tecnologias }) {
  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map((tec) => (
          <li key={tec.id}>
            {tec.nombre} — <em>{tec.tipo}</em>
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
