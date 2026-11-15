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
            Dkaudalia / Informacion Legal
          </p>

          <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
            {paths.privacypolicy.label}
          </h1>

          <p className="mt-2 text-sm text-text-secondary">
            ultima actualizacion: noviembre de 2026
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
          1. Responsable de la aplicacion
        </h2>

        <p>
          Dkaudalia es una aplicacion destinada a facilitar la gestion de
          informacion t&eacute;cnica y el desarrollo de herramientas de
          c&aacute;lculo para proyectos de ingenieria e instalaciones.
        </p>

        <p>
          Para cualquier consulta relacionada con esta politica de privacidad o
          el tratamiento de datos personales, puedes contactar a trav&eacute;s
          de{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          2. Informacion de los usuarios
        </h2>

        <p>
          La aplicacion podr&aacute; disponer de mecanismos de autenticacion
          para controlar el acceso a sus funcionalidades y recursos.
        </p>

        <p>
          Cuando estas funcionalidades est&eacute;n habilitadas, podr&aacute;n
          tratarse los datos necesarios para identificar a los usuarios y
          gestionar sus permisos, como el nombre, la direccion de correo
          electronico y los identificadores de cuenta.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          3. Informacion t&eacute;cnica de los proyectos
        </h2>

        <p>
          Dkaudalia est&aacute; concebida para permitir a los usuarios
          introducir, consultar y gestionar informacion t&eacute;cnica
          relacionada con sus proyectos.
        </p>

        <p>Esta informacion podr&aacute; incluir:</p>

        <ul className="list-disc pl-5">
          <li>Nombres, referencias y descripciones de proyectos.</li>
          <li>
            Datos y par&aacute;metros t&eacute;cnicos introducidos por los
            usuarios.
          </li>
          <li>Informacion de instalaciones de climatizacion y ventilacion.</li>
          <li>Tablas de c&aacute;lculo y resultados t&eacute;cnicos.</li>
          <li>
            Configuraciones y criterios utilizados en los c&aacute;lculos.
          </li>
          <li>Archivos importados o generados mediante la aplicacion.</li>
        </ul>

        <p>
          Los usuarios deber&aacute;n evitar introducir datos personales
          innecesarios en los documentos, descripciones y registros
          t&eacute;cnicos.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          4. Finalidad del uso de la informacion
        </h2>

        <p>
          La informacion introducida en Dkaudalia est&aacute; destinada a
          proporcionar las funcionalidades t&eacute;cnicas de la aplicacion,
          entre ellas:
        </p>

        <ul className="list-disc pl-5">
          <li>Organizar y consultar informacion de proyectos.</li>
          <li>Introducir y modificar par&aacute;metros t&eacute;cnicos.</li>
          <li>
            Realizar c&aacute;lculos mediante las herramientas disponibles.
          </li>
          <li>Visualizar tablas, resultados y resumenes t&eacute;cnicos.</li>
          <li>Importar y exportar informacion en formatos compatibles.</li>
        </ul>

        <p>
          El tratamiento de los datos personales que puedan incorporarse a estos
          procesos deber&aacute; limitarse a las finalidades correspondientes y
          contar con una base juridica adecuada.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          5. Acceso y uso compartido
        </h2>

        <p>
          Las funcionalidades de acceso y uso compartido de informacion
          estar&aacute;n sujetas a los permisos y mecanismos de autorizacion que
          se implementen en la aplicacion.
        </p>

        <p>
          Cuando se habiliten espacios de trabajo compartidos, el acceso a la
          informacion deber&aacute; limitarse a los usuarios autorizados para
          cada proyecto o recurso.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          6. Servicios y proveedores externos
        </h2>

        <p>
          Para su funcionamiento, Dkaudalia podr&aacute; utilizar servicios
          externos relacionados con la autenticacion, el alojamiento de la
          aplicacion, el almacenamiento de informacion u otras funcionalidades
          t&eacute;cnicas.
        </p>

        <p>
          Los proveedores que intervengan en el tratamiento de datos personales
          deber&aacute;n identificarse en esta politica cuando se confirme su
          utilizacion.
        </p>

        <p>
          Tambi&eacute;n puedes consultar informacion general sobre proteccion
          de datos en:
        </p>

        <a
          href="https://www.aepd.es/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Agencia Española de Proteccion de Datos
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-xs"
          />
        </a>

        <h2 className="pt-6 text-lg font-semibold">
          7. Seguridad y conservacion de los datos
        </h2>

        <p>
          La aplicacion deber&aacute; contar con medidas t&eacute;cnicas y
          organizativas adecuadas para proteger los datos personales frente a
          accesos no autorizados, alteraciones, p&eacute;rdidas o divulgaciones
          indebidas.
        </p>

        <p>
          Los mecanismos de almacenamiento, las copias de seguridad y los
          periodos de conservacion se definir&aacute;n de acuerdo con las
          funcionalidades implementadas y las obligaciones legales aplicables.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          8. Derechos de los usuarios
        </h2>

        <p>
          Los usuarios podr&aacute;n solicitar informacion sobre los datos
          personales que les conciernan y, cuando corresponda, ejercer sus
          derechos de acceso, rectificacion, supresion, oposicion, limitacion
          del tratamiento y portabilidad.
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
          Asimismo, podr&aacute;n presentar una reclamacion ante la Agencia
          Española de Proteccion de Datos cuando consideren que el tratamiento
          de sus datos personales incumple la normativa aplicable.
        </p>

        <h2 className="pt-6 text-lg font-semibold">
          9. Modificaciones de esta politica
        </h2>

        <p>
          Esta politica de privacidad podr&aacute; actualizarse cuando se
          incorporen nuevas funcionalidades, cambien los servicios utilizados o
          resulte necesario adaptarla a la normativa aplicable.
        </p>

        <p>
          La fecha indicada al comienzo de esta p&aacute;gina reflejar&aacute;
          su ultima actualizacion.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
