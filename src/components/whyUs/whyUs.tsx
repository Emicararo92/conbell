"use client";

import Image from "next/image";
import styles from "../../Styles/moreButton.module.css";
import MoreButton from "../../components/moreButton/moreButton";

function WhyUs() {
  return (
    <section className={styles.whyUsSection}>
      <div className={styles.contentContainer}>
        {/* Contenedor de imágenes */}
        <div className={styles.imageContainer}>
          <Image
            src="https://res.cloudinary.com/diefdex1h/image/upload/v1741978779/CASASANTINANORTE_PHLAUKALBER_2_t8mhxt.jpg"
            alt="Mueble de cocina elegante"
            width={400}
            height={600}
            className={styles.whyUsImage}
          />
          <Image
            src="https://res.cloudinary.com/diefdex1h/image/upload/v1741978766/pure_1_zmv1db.jpg"
            alt="Diseño moderno de cocina"
            width={400}
            height={600}
            className={styles.whyUsImage}
          />
        </div>

        {/* Descripción */}
        <div className={styles.textContainer}>
          <h2>¿Por qué elegirnos?</h2>
          <p>
            En <strong>Conbell</strong>, combinamos diseño, calidad y tecnología
            para crear cocinas que se adaptan a tu estilo de vida. Con más de 40
            años de experiencia, ofrecemos muebles a medida con materiales de
            alta gama y una atención personalizada para que tu hogar refleje tu
            esencia.
          </p>
          <MoreButton href="/nosotros" label="Ver Más" />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
