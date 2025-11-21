import { useState } from "react";
import {
  cabecera,
  perfil,
  educacion,
  experiencia,
  stackTecnologias as tecnologiasIniciales,
  proyectos,
  habilidades
} from "./data/cvData";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";
import Proyectos from "./components/Proyectos";

function App() {
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const agregarTecnologia = (nueva) => {
    // Asegúrate de que nueva tiene { id, nombre, tipo }
    setTecnologias((prev) => [...prev, nueva]);
  };
  return (
    <div style={{ padding: 20 }}>
      <CabeceraCV
        nombre={cabecera.nombre}
        cargo={cabecera.cargo}
        ciudad={cabecera.ciudad}
        contacto={cabecera.contacto}
      />
      <Perfil resumen={perfil.resumen} />
      <Educacion estudios={educacion} />
      <Experiencia experiencias={experiencia} />

      <StackTecnologias tecnologias={tecnologias} />

      <FormularioTecnologia onAgregar={agregarTecnologia} />

      <ToggleHabilidades habilidades={habilidades} />

      <Proyectos proyectos={proyectos} />
    </div>
  );
}

export default App;

