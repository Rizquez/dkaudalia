import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClipboardList,
  faFireExtinguisher,
  faTableCellsLarge,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/ui/components/Button";
import type { Module } from "./types";

const modules: Module[] = [
  {
    number: "01",
    name: "Datos de entrada",
    description:
      "Proyecto, cuadro de alturas y espacios: la base de todos los cálculos.",
    icon: faClipboardList,
  },
  {
    number: "02",
    name: "Tabla terciario",
    description:
      "Tabla por espacios, unidades VRV/VRF y recuperadores de calor por planta.",
    icon: faTableCellsLarge,
  },
  {
    number: "03",
    name: "Extracciones",
    description:
      "Espacios con extracción y sus sistemas, con los caudales necesarios.",
    icon: faWind,
  },
  {
    number: "04",
    name: "Ventilación sala PCI",
    description:
      "Calcula la ventilación de las salas de protección contra incendios.",
    icon: faFireExtinguisher,
  },
];

const Home = () => {
  return (
    <div className="flex flex-1 flex-col bg-muted text-text-primary">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-5">
          <span className="bg-primary px-3 py-2 text-2xl font-bold text-secondary">
            Dkaudalia
          </span>

          <div className="border-l border-border pl-4">
            <p className="font-semibold">Clima y ventilación</p>
            <p className="text-xs text-text-secondary">
              Proyecta el aire, nosotros hacemos las cuentas
            </p>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="flex flex-1 items-center">
          <div className="mx-auto grid w-full max-w-7xl xl:grid-cols-2">
            <div className="flex flex-col justify-center px-5 py-12 xl:py-20">
              <p className="mb-6 font-mono text-xs text-text-secondary">
                Plataforma técnica interna
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Cálculo de clima y ventilación
              </h1>

              <p className="mt-6 max-w-xl leading-7 text-text-secondary">
                Un espacio de trabajo para organizar los datos de entrada,
                consultar tablas técnicas y gestionar la información de
                climatización y ventilación de tus proyectos.
              </p>

              <div className="mt-8">
                <Button
                  onClick={() => {
                    // TODO: Navegar a la herramienta.
                  }}
                >
                  Acceder a la herramienta
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </div>
            </div>

            <div className="border-t border-border px-5 py-12 xl:border-t-0 xl:border-l xl:py-20">
              <p className="font-mono text-xs text-text-secondary">
                Del dato al resumen
              </p>

              <h2 className="mt-3 mb-8 text-3xl font-bold">
                Módulos de trabajo
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {modules.map((module) => (
                  <article
                    key={module.number}
                    className="flex min-h-48 flex-col border border-border bg-surface p-5"
                  >
                    <div className="flex justify-between">
                      <span className="font-mono text-xs text-text-secondary">
                        /{module.number}
                      </span>

                      <FontAwesomeIcon icon={module.icon} className="text-xl" />
                    </div>

                    <div className="mt-auto pt-6">
                      <h3 className="font-semibold">{module.name}</h3>

                      <p className="mt-2 text-sm text-text-secondary">
                        {module.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
