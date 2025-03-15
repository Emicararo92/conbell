"use client";

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../Styles/kitchenApp.module.css";
import { JSX, ClassAttributes, HTMLAttributes } from "react";

const imgRenderKitchenOne = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978859/1_jlz3lc.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978858/2_ywzdaf.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978857/4_lqnaax.png",
];

const imgRenderKitchenTwo = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978857/10_w7n9zr.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978856/9_nzc9qx.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978856/8_mfjv1b.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978856/11_oxntad.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978854/12_ebqosh.png",
];

const imgRenderKitchenThree = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978847/9_zdjgqk.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978846/8_pkut0c.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978846/7_vl5hkr.png",
];

const imgRenderKitchenFour = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978839/1_ehjzu8.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978837/3_tca1c6.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978837/3_tca1c6.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978835/opcion_horno_de_90_zxzgxa.png",
];

const imgKitchenOne = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978783/CASASANTINANORTE_PHLAUKALBER_9_oum4h8.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978779/CASASANTINANORTE_PHLAUKALBER_2_t8mhxt.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978780/16122020_-_FANESI_NAVARRO_ph_G_Viramonte-1113-HDR-2_motpr3.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978776/WhatsApp_Image_2023-08-03_at_17.13.19_2_fxcxfk.jpg",
];

const imgKitchenTwo = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978775/026_-_ARQ_AND_CO_ENERO_2023-8604-_13_01_2023-HDR_deeyv5.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978774/032_-_BAREMBERG_BASS_ph_gonzaloviramonte-4154-_23_08_2022_puxabj.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978770/025_-_ARQ_AND_CO_ENERO_2023-8618-_13_01_2023-HDR_osxz4t.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978766/2019ene._-_Casa_En_Valle_Escondido_ph_G_Viramonte-_4418_dlc5hr.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978771/ARQ_SETIEN_ph_G_Viramonte-_9171_-_12_21_pbkadc.jpg",
];

function KitchenApp() {
  const futureProjects = [
    ...imgRenderKitchenOne,
    ...imgRenderKitchenTwo,
    ...imgRenderKitchenThree,
    ...imgRenderKitchenFour,
  ];
  const realKitchens = [...imgKitchenOne, ...imgKitchenTwo];

  const CustomPrevArrow = (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLDivElement> &
      HTMLAttributes<HTMLDivElement>
  ) => (
    <div {...props} className={styles.customArrow} style={{ left: "-30px" }}>
      <FaArrowLeft />
    </div>
  );

  const CustomNextArrow = (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLDivElement> &
      HTMLAttributes<HTMLDivElement>
  ) => (
    <div {...props} className={styles.customArrow} style={{ right: "-30px" }}>
      <FaArrowRight />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={styles.kitchenContainer}>
      <h1 className={styles.mainTitle}>Nuestras Cocinas</h1>

      {/* Sección: Proyectos a Futuro */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Proyectos a Futuro (Renderizados)
        </h2>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {futureProjects.map((src, index) => (
              <div key={index} className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Render ${index + 1}`}
                  width={400} 
                  height={500} 
                  className={styles.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Sección: Cocinas Reales */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cocinas Reales (Hechas)</h2>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {realKitchens.map((src, index) => (
              <div key={index} className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Cocina ${index + 1}`}
                  width={400}
                  height={500}
                  className={styles.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA: Botón de Contacto */}
      <Link href="/contact">
        <button className={styles.ctaButton}>
          Arma tu cocina con nosotros
        </button>
      </Link>
    </div>
  );
}

export default KitchenApp;
