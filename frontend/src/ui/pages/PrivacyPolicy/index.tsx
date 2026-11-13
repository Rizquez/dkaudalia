import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/ui/components/Button";
import { paths } from "@/ui/routes/paths";

const CONTACT_EMAIL = "d.gerardi@urbanbuild.es";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const linkClassName =
    "inline-flex items-center gap-2 text-text-primary transition-colors hover:opacity-70";

  return (
    <section className="flex min-w-0 flex-1 flex-col bg-surface p-5 sm:p-10 lg:p-16">
      <header className="flex items-start justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="mb-3 font-mono text-xs text-text-secondary">
            Dkaudalia / Información Legal
          </p>

          <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
            {paths.privacypolicy.label}
          </h1>

          <p className="mt-2 text-sm text-text-secondary">
            Última actualización: noviembre de 2026
          </p>
        </div>

        <Button
          variant="background"
          onClick={() => navigate(-1)}
          aria-label="Volver"
          className="h-11 w-11 shrink-0"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      </header>

      <div className="flex max-w-8xl flex-col gap-4 py-8 text-sm leading-6 text-text-primary">
        <h2 className="text-lg font-semibold">
          1. Responsable de la aplicación
        </h2>

        <p>
          Dkaudalia es una aplicación destinada a facilitar la gestión de
          información técnica y el desarrollo de herramientas de cálculo para
          proyectos de ingeniería e instalaciones.
        </p>

        <p>
          Para cualquier consulta relacionada con esta política de privacidad o
          el tratamiento de datos personales, puedes contactar a través de{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          2. Información de los usuarios
        </h2>

        <p>
          La aplicación podrá disponer de mecanismos de autenticación para
          controlar el acceso a sus funcionalidades y recursos.
        </p>

        <p>
          Cuando estas funcionalidades estén habilitadas, podrán tratarse los
          datos necesarios para identificar a los usuarios y gestionar sus
          permisos, como el nombre, la dirección de correo electrónico y los
          identificadores de cuenta.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          3. Información técnica de los proyectos
        </h2>

        <p>
          Dkaudalia está concebida para permitir a los usuarios introducir,
          consultar y gestionar información técnica relacionada con sus
          proyectos.
        </p>

        <p>Esta información podrá incluir:</p>

        <ul className="list-disc pl-5">
          <li>Nombres, referencias y descripciones de proyectos.</li>
          <li>Datos y parámetros técnicos introducidos por los usuarios.</li>
          <li>Información de instalaciones de climatización y ventilación.</li>
          <li>Tablas de cálculo y resultados técnicos.</li>
          <li>Configuraciones y criterios utilizados en los cálculos.</li>
          <li>Archivos importados o generados mediante la aplicación.</li>
        </ul>

        <p>
          Los usuarios deberán evitar introducir datos personales innecesarios
          en los documentos, descripciones y registros técnicos.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          4. Finalidad del uso de la información
        </h2>

        <p>
          La información introducida en Dkaudalia está destinada a proporcionar
          las funcionalidades técnicas de la aplicación, entre ellas:
        </p>

        <ul className="list-disc pl-5">
          <li>Organizar y consultar información de proyectos.</li>
          <li>Introducir y modificar parámetros técnicos.</li>
          <li>Realizar cálculos mediante las herramientas disponibles.</li>
          <li>Visualizar tablas, resultados y resúmenes técnicos.</li>
          <li>Importar y exportar información en formatos compatibles.</li>
        </ul>

        <p>
          El tratamiento de los datos personales que puedan incorporarse a estos
          procesos deberá limitarse a las finalidades correspondientes y contar
          con una base jurídica adecuada.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          5. Acceso y uso compartido
        </h2>

        <p>
          Las funcionalidades de acceso y uso compartido de información estarán
          sujetas a los permisos y mecanismos de autorización que se implementen
          en la aplicación.
        </p>

        <p>
          Cuando se habiliten espacios de trabajo compartidos, el acceso a la
          información deberá limitarse a los usuarios autorizados para cada
          proyecto o recurso.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          6. Servicios y proveedores externos
        </h2>

        <p>
          Para su funcionamiento, Dkaudalia podrá utilizar servicios externos
          relacionados con la autenticación, el alojamiento de la aplicación, el
          almacenamiento de información u otras funcionalidades técnicas.
        </p>

        <p>
          Los proveedores que intervengan en el tratamiento de datos personales
          deberán identificarse en esta política cuando se confirme su
          utilización.
        </p>

        <p>
          También puedes consultar información general sobre protección de datos
          en:
        </p>

        <a
          href="https://www.aepd.es/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Agencia Española de Protección de Datos
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-xs"
          />
        </a>

        <h2 className="pt-6 text-lg font-semibold">
          7. Seguridad y conservación de los datos
        </h2>

        <p>
          La aplicación deberá contar con medidas técnicas y organizativas
          adecuadas para proteger los datos personales frente a accesos no
          autorizados, alteraciones, pérdidas o divulgaciones indebidas.
        </p>

        <p>
          Los mecanismos de almacenamiento, las copias de seguridad y los
          periodos de conservación se definirán de acuerdo con las
          funcionalidades implementadas y las obligaciones legales aplicables.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          8. Derechos de los usuarios
        </h2>

        <p>
          Los usuarios podrán solicitar información sobre los datos personales
          que les conciernan y, cuando corresponda, ejercer sus derechos de
          acceso, rectificación, supresión, oposición, limitación del
          tratamiento y portabilidad.
        </p>

        <p>
          Para realizar una consulta o solicitud relacionada con estos derechos,
          pueden contactar mediante{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <p>
          Asimismo, podrán presentar una reclamación ante la Agencia Española de
          Protección de Datos cuando consideren que el tratamiento de sus datos
          personales incumple la normativa aplicable.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          9. Modificaciones de esta política
        </h2>

        <p>
          Esta política de privacidad podrá actualizarse cuando se incorporen
          nuevas funcionalidades, cambien los servicios utilizados o resulte
          necesario adaptarla a la normativa aplicable.
        </p>

        <p>
          La fecha indicada al comienzo de esta página reflejará su última
          actualización.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
