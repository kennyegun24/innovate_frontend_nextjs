"use client";
import { useContext } from "react";
import { authState } from "./utils/session";
import { redirect } from "next/navigation";
import NavBar from "./components/landingPage/NavBar";
import { HeightContext } from "./context/HeightContext";

export default function Home() {
  const { scrollY, setElement } = useContext(HeightContext);
  if (authState) {
    redirect("/feeds");
  }
  if (typeof window !== "undefined") {
    setElement("landingPage");
  }
  return (
    <div className="landingPage scroll_y flex column gap1rem">
      <NavBar scrollY={scrollY} />
      <div style={{ padding: "1rem 5rem" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla esse
        rem, hic maxime accusantium itaque aut soluta dolorum reiciendis, minus
        id ex corporis. Reprehenderit, blanditiis! Expedita rerum quas iusto
        neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        sit fugiat voluptas ipsam officiis id, quis in libero accusamus eveniet,
        aspernatur nisi, deserunt labore sapiente exercitationem excepturi. Ut,
        recusandae earum. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Reiciendis excepturi tempora natus, eos tenetur doloribus?
        Obcaecati vero beatae temporibus! Magnam iure tenetur dolorem provident
        quae maiores omnis deleniti dolor ullam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quo doloribus dolore consequuntur
        distinctio facilis architecto voluptate inventore nesciunt reprehenderit
        asperiores veniam praesentium debitis numquam, eveniet corrupti illo.
        Non, modi sequi. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ut dignissimos adipisci modi provident dicta, sit quam ducimus
        impedit perferendis asperiores magni dolorem unde expedita labore? Iste
        illum delectus placeat perferendis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Architecto deserunt non dolore voluptatem
        a. Earum ex tempore voluptates similique in, possimus, aliquid magnam
        laboriosam reprehenderit quibusdam vel recusandae laborum dicta? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa dolore quas
        dolorum numquam error culpa laudantium ducimus eaque corrupti
        blanditiis, facilis cupiditate? Cumque fugit corrupti atque minus magnam
        exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Numquam eius reprehenderit eveniet, cum quas cupiditate rem
        consectetur ea velit, dignissimos asperiores ab maiores temporibus aut,
        quis minima dolorem tenetur nam? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ex maiores corrupti quae vitae suscipit accusamus
        corporis aut deleniti non reprehenderit, nisi fuga ipsum facere debitis,
        ratione earum dolorem quisquam nam! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Quas error natus amet quisquam totam saepe
        aliquid nostrum ipsum iusto culpa porro consequuntur, ratione nulla,
        maxime molestias voluptatibus aspernatur architecto. Officiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis,
        error saepe adipisci maiores voluptatibus odit esse? Itaque minus
        accusantium amet. Rem eligendi laboriosam ducimus est beatae, nihil
        maxime illo! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Facilis beatae ducimus accusantium soluta incidunt provident pariatur
        quas similique! Ut provident voluptatum non magnam voluptates modi dicta
        quod incidunt facilis dolor! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Nulla esse rem, hic maxime accusantium itaque aut
        soluta dolorum reiciendis, minus id ex corporis. Reprehenderit,
        blanditiis! Expedita rerum quas iusto neque? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis sit fugiat voluptas ipsam
        officiis id, quis in libero accusamus eveniet, aspernatur nisi, deserunt
        labore sapiente exercitationem excepturi. Ut, recusandae earum. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Reiciendis excepturi
        tempora natus, eos tenetur doloribus? Obcaecati vero beatae temporibus!
        Magnam iure tenetur dolorem provident quae maiores omnis deleniti dolor
        ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
        doloribus dolore consequuntur distinctio facilis architecto voluptate
        inventore nesciunt reprehenderit asperiores veniam praesentium debitis
        numquam, eveniet corrupti illo. Non, modi sequi. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ut dignissimos adipisci modi
        provident dicta, sit quam ducimus impedit perferendis asperiores magni
        dolorem unde expedita labore? Iste illum delectus placeat perferendis.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        deserunt non dolore voluptatem a. Earum ex tempore voluptates similique
        in, possimus, aliquid magnam laboriosam reprehenderit quibusdam vel
        recusandae laborum dicta? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eos ipsa dolore quas dolorum numquam error culpa
        laudantium ducimus eaque corrupti blanditiis, facilis cupiditate? Cumque
        fugit corrupti atque minus magnam exercitationem. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Numquam eius reprehenderit eveniet,
        cum quas cupiditate rem consectetur ea velit, dignissimos asperiores ab
        maiores temporibus aut, quis minima dolorem tenetur nam? Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Ex maiores corrupti quae
        vitae suscipit accusamus corporis aut deleniti non reprehenderit, nisi
        fuga ipsum facere debitis, ratione earum dolorem quisquam nam! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Quas error natus
        amet quisquam totam saepe aliquid nostrum ipsum iusto culpa porro
        consequuntur, ratione nulla, maxime molestias voluptatibus aspernatur
        architecto. Officiis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eveniet perferendis, error saepe adipisci maiores voluptatibus
        odit esse? Itaque minus accusantium amet. Rem eligendi laboriosam
        ducimus est beatae, nihil maxime illo! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Facilis beatae ducimus accusantium soluta
        incidunt provident pariatur quas similique! Ut provident voluptatum non
        magnam voluptates modi dicta quod incidunt facilis dolor! Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Nulla esse rem, hic maxime
        accusantium itaque aut soluta dolorum reiciendis, minus id ex corporis.
        Reprehenderit, blanditiis! Expedita rerum quas iusto neque? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Corporis sit fugiat
        voluptas ipsam officiis id, quis in libero accusamus eveniet, aspernatur
        nisi, deserunt labore sapiente exercitationem excepturi. Ut, recusandae
        earum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis excepturi tempora natus, eos tenetur doloribus? Obcaecati
        vero beatae temporibus! Magnam iure tenetur dolorem provident quae
        maiores omnis deleniti dolor ullam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quo doloribus dolore consequuntur
        distinctio facilis architecto voluptate inventore nesciunt reprehenderit
        asperiores veniam praesentium debitis numquam, eveniet corrupti illo.
        Non, modi sequi. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ut dignissimos adipisci modi provident dicta, sit quam ducimus
        impedit perferendis asperiores magni dolorem unde expedita labore? Iste
        illum delectus placeat perferendis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Architecto deserunt non dolore voluptatem
        a. Earum ex tempore voluptates similique in, possimus, aliquid magnam
        laboriosam reprehenderit quibusdam vel recusandae laborum dicta? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa dolore quas
        dolorum numquam error culpa laudantium ducimus eaque corrupti
        blanditiis, facilis cupiditate? Cumque fugit corrupti atque minus magnam
        exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Numquam eius reprehenderit eveniet, cum quas cupiditate rem
        consectetur ea velit, dignissimos asperiores ab maiores temporibus aut,
        quis minima dolorem tenetur nam? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ex maiores corrupti quae vitae suscipit accusamus
        corporis aut deleniti non reprehenderit, nisi fuga ipsum facere debitis,
        ratione earum dolorem quisquam nam! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Quas error natus amet quisquam totam saepe
        aliquid nostrum ipsum iusto culpa porro consequuntur, ratione nulla,
        maxime molestias voluptatibus aspernatur architecto. Officiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis,
        error saepe adipisci maiores voluptatibus odit esse? Itaque minus
        accusantium amet. Rem eligendi laboriosam ducimus est beatae, nihil
        maxime illo! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Facilis beatae ducimus accusantium soluta incidunt provident pariatur
        quas similique! Ut provident voluptatum non magnam voluptates modi dicta
        quod incidunt facilis dolor! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Nulla esse rem, hic maxime accusantium itaque aut
        soluta dolorum reiciendis, minus id ex corporis. Reprehenderit,
        blanditiis! Expedita rerum quas iusto neque? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis sit fugiat voluptas ipsam
        officiis id, quis in libero accusamus eveniet, aspernatur nisi, deserunt
        labore sapiente exercitationem excepturi. Ut, recusandae earum. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Reiciendis excepturi
        tempora natus, eos tenetur doloribus? Obcaecati vero beatae temporibus!
        Magnam iure tenetur dolorem provident quae maiores omnis deleniti dolor
        ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
        doloribus dolore consequuntur distinctio facilis architecto voluptate
        inventore nesciunt reprehenderit asperiores veniam praesentium debitis
        numquam, eveniet corrupti illo. Non, modi sequi. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ut dignissimos adipisci modi
        provident dicta, sit quam ducimus impedit perferendis asperiores magni
        dolorem unde expedita labore? Iste illum delectus placeat perferendis.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        deserunt non dolore voluptatem a. Earum ex tempore voluptates similique
        in, possimus, aliquid magnam laboriosam reprehenderit quibusdam vel
        recusandae laborum dicta? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eos ipsa dolore quas dolorum numquam error culpa
        laudantium ducimus eaque corrupti blanditiis, facilis cupiditate? Cumque
        fugit corrupti atque minus magnam exercitationem. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Numquam eius reprehenderit eveniet,
        cum quas cupiditate rem consectetur ea velit, dignissimos asperiores ab
        maiores temporibus aut, quis minima dolorem tenetur nam? Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Ex maiores corrupti quae
        vitae suscipit accusamus corporis aut deleniti non reprehenderit, nisi
        fuga ipsum facere debitis, ratione earum dolorem quisquam nam! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Quas error natus
        amet quisquam totam saepe aliquid nostrum ipsum iusto culpa porro
        consequuntur, ratione nulla, maxime molestias voluptatibus aspernatur
        architecto. Officiis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eveniet perferendis, error saepe adipisci maiores voluptatibus
        odit esse? Itaque minus accusantium amet. Rem eligendi laboriosam
        ducimus est beatae, nihil maxime illo! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Facilis beatae ducimus accusantium soluta
        incidunt provident pariatur quas similique! Ut provident voluptatum non
        magnam voluptates modi dicta quod incidunt facilis dolor! Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Nulla esse rem, hic maxime
        accusantium itaque aut soluta dolorum reiciendis, minus id ex corporis.
        Reprehenderit, blanditiis! Expedita rerum quas iusto neque? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Corporis sit fugiat
        voluptas ipsam officiis id, quis in libero accusamus eveniet, aspernatur
        nisi, deserunt labore sapiente exercitationem excepturi. Ut, recusandae
        earum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis excepturi tempora natus, eos tenetur doloribus? Obcaecati
        vero beatae temporibus! Magnam iure tenetur dolorem provident quae
        maiores omnis deleniti dolor ullam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quo doloribus dolore consequuntur
        distinctio facilis architecto voluptate inventore nesciunt reprehenderit
        asperiores veniam praesentium debitis numquam, eveniet corrupti illo.
        Non, modi sequi. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ut dignissimos adipisci modi provident dicta, sit quam ducimus
        impedit perferendis asperiores magni dolorem unde expedita labore? Iste
        illum delectus placeat perferendis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Architecto deserunt non dolore voluptatem
        a. Earum ex tempore voluptates similique in, possimus, aliquid magnam
        laboriosam reprehenderit quibusdam vel recusandae laborum dicta? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa dolore quas
        dolorum numquam error culpa laudantium ducimus eaque corrupti
        blanditiis, facilis cupiditate? Cumque fugit corrupti atque minus magnam
        exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Numquam eius reprehenderit eveniet, cum quas cupiditate rem
        consectetur ea velit, dignissimos asperiores ab maiores temporibus aut,
        quis minima dolorem tenetur nam? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ex maiores corrupti quae vitae suscipit accusamus
        corporis aut deleniti non reprehenderit, nisi fuga ipsum facere debitis,
        ratione earum dolorem quisquam nam! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Quas error natus amet quisquam totam saepe
        aliquid nostrum ipsum iusto culpa porro consequuntur, ratione nulla,
        maxime molestias voluptatibus aspernatur architecto. Officiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis,
        error saepe adipisci maiores voluptatibus odit esse? Itaque minus
        accusantium amet. Rem eligendi laboriosam ducimus est beatae, nihil
        maxime illo! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Facilis beatae ducimus accusantium soluta incidunt provident pariatur
        quas similique! Ut provident voluptatum non magnam voluptates modi dicta
        quod incidunt facilis dolor!
      </div>
    </div>
  );
}
