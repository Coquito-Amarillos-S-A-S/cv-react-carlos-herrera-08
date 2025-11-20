import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";

import { cvData } from "./data/cvData";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <CabeceraCV nombre={cvData.nombre} profesion={cvData.profesion} />

      <Perfil texto={cvData.perfil} />

      <Educacion items={cvData.educacion} />

      <Experiencia trabajos={cvData.experiencia} />

      <StackTecnologias tecnologias={cvData.tecnologias} />

      <Proyectos proyectos={cvData.proyectos} />

      <Habilidades habilidades={cvData.habilidades} />
    </div>
  );
}
