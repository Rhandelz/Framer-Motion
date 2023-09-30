import React from "react";
import { motion, useScroll } from "framer-motion";

const Scroll = () => {
  return (
    <motion.div className="s_full bg-slate-700 flex items-center flex-col gap-10 scroll_fit  relative">
      <h1 className="text-white font-bold text-5xl">Hello World</h1>

      <p className="text-white font-bold max_s">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        impedit iure laudantium perferendis, dignissimos commodi placeat!
        Explicabo, suscipit molestias cupiditate numquam hic illo blanditiis non
        velit, necessitatibus eum reprehenderit nihil iste vitae dignissimos
        iure ea commodi accusamus dolorum iusto reiciendis.
      </p>

      <span className="flexing flex-row max_s">
        <p className="text-white font-bold text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex
          magnam ratione neque eligendi quos commodi quaerat voluptas, fugiat
          architecto.
        </p>
        <p className="text-white font-bold text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          consequuntur nesciunt! Sequi quo tempora odit eius pariatur ea veniam
          natus sed reiciendis, doloremque fugit consequuntur corporis aut
          dolores voluptas!
        </p>
        <p className="text-white font-bold text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          illum nihil ipsum doloribus quas, deleniti architecto blanditiis
          expedita! Est adipisci ipsum odio.
        </p>
      </span>

      <h2 className="flexing flex-row max_s font-bold text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        quam, impedit, cumque non molestias perspiciatis deserunt possimus
        debitis vel iste consequatur tempora magni laboriosam tempore sed velit
        quos optio porro officiis officia illum quibusdam et. Inventore
        molestias quisquam quis voluptates eligendi odit blanditiis aliquid quos
        similique necessitatibus. Inventore reprehenderit deleniti maiores minus
        accusamus et quidem provident officia, rem illo praesentium aspernatur
        exercitationem hic, qui nam beatae iste, commodi dicta. Distinctio
        necessitatibus recusandae molestiae similique fugit libero ea
        consequatur reiciendis. Labore non enim atque dolore consectetur vitae
        ad, molestiae, optio, animi veritatis aperiam corrupti rerum voluptatem
        debitis! Aperiam, in deserunt tempora optio dolorem placeat maxime
        magnam excepturi exercitationem suscipit. Voluptatum atque provident
        inventore similique. Obcaecati molestiae sequi libero repellendus maxime
        cumque nisi perspiciatis ratione ducimus aut quas rerum, suscipit
        repellat culpa repudiandae amet pariatur maiores hic eveniet, in
        adipisci rem dignissimos soluta sit? Unde inventore velit ipsum quos
        deleniti fugiat voluptate dicta dolor qui quam? Eos dolor, quos a culpa
        explicabo reprehenderit accusamus at tempora sunt fugiat corporis autem
        id omnis commodi sed illo rerum excepturi asperiores consectetur
        molestias dignissimos praesentium corrupti! Distinctio quo possimus,
        voluptate obcaecati hic molestias culpa soluta iusto. Rerum ipsam,
        numquam hic ab accusantium laborum aut odio?
      </h2>
      <h5 className="flexing flex-row max_s font-bold text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt
        dolore ratione modi cupiditate rerum dignissimos reprehenderit. Optio,
        consequatur. Corrupti ipsa consequuntur minima quidem tempore, quos odio
        sit, quasi, repudiandae porro deserunt magni! Possimus sit dolore
        veritatis magni voluptatibus. Illum rerum praesentium aliquid? Illo
        alias, veniam incidunt ducimus accusamus temporibus asperiores sed, enim
        distinctio consequuntur, corporis quas pariatur voluptatum est. Amet aut
        debitis, ullam reprehenderit libero beatae nemo veritatis tempore id
        accusantium dignissimos. Placeat, itaque dolorem iusto culpa quasi earum
        corrupti atque ab non sequi at impedit, aliquam, excepturi et? Similique
        dolorem beatae vitae culpa voluptatem dolor totam, deserunt, aperiam
        consequuntur nesciunt, repudiandae veritatis tenetur? Eius ipsa vero
        tempore, a cupiditate iure rerum deserunt blanditiis. Officia rerum quia
        fugit expedita itaque, ratione incidunt! Perspiciatis atque consequatur
        sint, vitae minus hic, quis, dicta consequuntur illum harum pariatur
        doloribus incidunt odio cum officia? Blanditiis id mollitia saepe magni
        doloremque neque, odit culpa ratione minus sint libero reiciendis sed
        laudantium, veritatis voluptate distinctio. Quaerat officiis nesciunt
        laudantium distinctio soluta nostrum eos inventore magnam perspiciatis
        culpa assumenda commodi minima, similique iste exercitationem reiciendis
        repellat temporibus aliquid consequuntur fugiat iusto. Illo, laudantium
        aperiam? Repellat odit et vero esse ipsa quisquam, corporis officiis
        nihil perferendis quis officia quasi sequi.
      </h5>
      <h5 className="flexing flex-row max_s font-bold text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt
        dolore ratione modi cupiditate rerum dignissimos reprehenderit. Optio,
        consequatur. Corrupti ipsa consequuntur minima quidem tempore, quos odio
        sit, quasi, repudiandae porro deserunt magni! Possimus sit dolore
        veritatis magni voluptatibus. Illum rerum praesentium aliquid? Illo
        alias, veniam incidunt ducimus accusamus temporibus asperiores sed, enim
        distinctio consequuntur, corporis quas pariatur voluptatum est. Amet aut
        debitis, ullam reprehenderit libero beatae nemo veritatis tempore id
        accusantium dignissimos. Placeat, itaque dolorem iusto culpa quasi earum
        corrupti atque ab non sequi at impedit, aliquam, excepturi et? Similique
        dolorem beatae vitae culpa voluptatem dolor totam, deserunt, aperiam
        consequuntur nesciunt, repudiandae veritatis tenetur? Eius ipsa vero
        tempore, a cupiditate iure rerum deserunt blanditiis. Officia rerum quia
        fugit expedita itaque, ratione incidunt! Perspiciatis atque consequatur
        sint, vitae minus hic, quis, dicta consequuntur illum harum pariatur
        doloribus incidunt odio cum officia? Blanditiis id mollitia saepe magni
        doloremque neque, odit culpa ratione minus sint libero reiciendis sed
        laudantium, veritatis voluptate distinctio. Quaerat officiis nesciunt
        laudantium distinctio soluta nostrum eos inventore magnam perspiciatis
        culpa assumenda commodi minima, similique iste exercitationem reiciendis
        repellat temporibus aliquid consequuntur fugiat iusto. Illo, laudantium
        aperiam? Repellat odit et vero esse ipsa quisquam, corporis officiis
        nihil perferendis quis officia quasi sequi.
      </h5>
      <h5 className="flexing flex-row max_s font-bold text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt
        dolore ratione modi cupiditate rerum dignissimos reprehenderit. Optio,
        consequatur. Corrupti ipsa consequuntur minima quidem tempore, quos odio
        sit, quasi, repudiandae porro deserunt magni! Possimus sit dolore
        veritatis magni voluptatibus. Illum rerum praesentium aliquid? Illo
        alias, veniam incidunt ducimus accusamus temporibus asperiores sed, enim
        distinctio consequuntur, corporis quas pariatur voluptatum est. Amet aut
        debitis, ullam reprehenderit libero beatae nemo veritatis tempore id
        accusantium dignissimos. Placeat, itaque dolorem iusto culpa quasi earum
        corrupti atque ab non sequi at impedit, aliquam, excepturi et? Similique
        dolorem beatae vitae culpa voluptatem dolor totam, deserunt, aperiam
        consequuntur nesciunt, repudiandae veritatis tenetur? Eius ipsa vero
        tempore, a cupiditate iure rerum deserunt blanditiis. Officia rerum quia
        fugit expedita itaque, ratione incidunt! Perspiciatis atque consequatur
        sint, vitae minus hic, quis, dicta consequuntur illum harum pariatur
        doloribus incidunt odio cum officia? Blanditiis id mollitia saepe magni
        doloremque neque, odit culpa ratione minus sint libero reiciendis sed
        laudantium, veritatis voluptate distinctio. Quaerat officiis nesciunt
        laudantium distinctio soluta nostrum eos inventore magnam perspiciatis
        culpa assumenda commodi minima, similique iste exercitationem reiciendis
        repellat temporibus aliquid consequuntur fugiat iusto. Illo, laudantium
        aperiam? Repellat odit et vero esse ipsa quisquam, corporis officiis
        nihil perferendis quis officia quasi sequi.
      </h5>
      <h5 className="flexing flex-row max_s font-bold text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt
        dolore ratione modi cupiditate rerum dignissimos reprehenderit. Optio,
        consequatur. Corrupti ipsa consequuntur minima quidem tempore, quos odio
        sit, quasi, repudiandae porro deserunt magni! Possimus sit dolore
        veritatis magni voluptatibus. Illum rerum praesentium aliquid? Illo
        alias, veniam incidunt ducimus accusamus temporibus asperiores sed, enim
        distinctio consequuntur, corporis quas pariatur voluptatum est. Amet aut
        debitis, ullam reprehenderit libero beatae nemo veritatis tempore id
        accusantium dignissimos. Placeat, itaque dolorem iusto culpa quasi earum
        corrupti atque ab non sequi at impedit, aliquam, excepturi et? Similique
        dolorem beatae vitae culpa voluptatem dolor totam, deserunt, aperiam
        consequuntur nesciunt, repudiandae veritatis tenetur? Eius ipsa vero
        tempore, a cupiditate iure rerum deserunt blanditiis. Officia rerum quia
        fugit expedita itaque, ratione incidunt! Perspiciatis atque consequatur
        sint, vitae minus hic, quis, dicta consequuntur illum harum pariatur
        doloribus incidunt odio cum officia? Blanditiis id mollitia saepe magni
        doloremque neque, odit culpa ratione minus sint libero reiciendis sed
        laudantium, veritatis voluptate distinctio. Quaerat officiis nesciunt
        laudantium distinctio soluta nostrum eos inventore magnam perspiciatis
        culpa assumenda commodi minima, similique iste exercitationem reiciendis
        repellat temporibus aliquid consequuntur fugiat iusto. Illo, laudantium
        aperiam? Repellat odit et vero esse ipsa quisquam, corporis officiis
        nihil perferendis quis officia quasi sequi.
      </h5>
      <h5 className="flexing flex-row max_s font-bold text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt
        dolore ratione modi cupiditate rerum dignissimos reprehenderit. Optio,
        consequatur. Corrupti ipsa consequuntur minima quidem tempore, quos odio
        sit, quasi, repudiandae porro deserunt magni! Possimus sit dolore
        veritatis magni voluptatibus. Illum rerum praesentium aliquid? Illo
        alias, veniam incidunt ducimus accusamus temporibus asperiores sed, enim
        distinctio consequuntur, corporis quas pariatur voluptatum est. Amet aut
        debitis, ullam reprehenderit libero beatae nemo veritatis tempore id
        accusantium dignissimos. Placeat, itaque dolorem iusto culpa quasi earum
        corrupti atque ab non sequi at impedit, aliquam, excepturi et? Similique
        dolorem beatae vitae culpa voluptatem dolor totam, deserunt, aperiam
        consequuntur nesciunt, repudiandae veritatis tenetur? Eius ipsa vero
        tempore, a cupiditate iure rerum deserunt blanditiis. Officia rerum quia
        fugit expedita itaque, ratione incidunt! Perspiciatis atque consequatur
        sint, vitae minus hic, quis, dicta consequuntur illum harum pariatur
        doloribus incidunt odio cum officia? Blanditiis id mollitia saepe magni
        doloremque neque, odit culpa ratione minus sint libero reiciendis sed
        laudantium, veritatis voluptate distinctio. Quaerat officiis nesciunt
        laudantium distinctio soluta nostrum eos inventore magnam perspiciatis
        culpa assumenda commodi minima, similique iste exercitationem reiciendis
        repellat temporibus aliquid consequuntur fugiat iusto. Illo, laudantium
        aperiam? Repellat odit et vero esse ipsa quisquam, corporis officiis
        nihil perferendis quis officia quasi sequi.
      </h5>
      <h5 className="flexing flex-row max_s font-bold text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt
        dolore ratione modi cupiditate rerum dignissimos reprehenderit. Optio,
        consequatur. Corrupti ipsa consequuntur minima quidem tempore, quos odio
        sit, quasi, repudiandae porro deserunt magni! Possimus sit dolore
        veritatis magni voluptatibus. Illum rerum praesentium aliquid? Illo
        alias, veniam incidunt ducimus accusamus temporibus asperiores sed, enim
        distinctio consequuntur, corporis quas pariatur voluptatum est. Amet aut
        debitis, ullam reprehenderit libero beatae nemo veritatis tempore id
        accusantium dignissimos. Placeat, itaque dolorem iusto culpa quasi earum
        corrupti atque ab non sequi at impedit, aliquam, excepturi et? Similique
        dolorem beatae vitae culpa voluptatem dolor totam, deserunt, aperiam
        consequuntur nesciunt, repudiandae veritatis tenetur? Eius ipsa vero
        tempore, a cupiditate iure rerum deserunt blanditiis. Officia rerum quia
        fugit expedita itaque, ratione incidunt! Perspiciatis atque consequatur
        sint, vitae minus hic, quis, dicta consequuntur illum harum pariatur
        doloribus incidunt odio cum officia? Blanditiis id mollitia saepe magni
        doloremque neque, odit culpa ratione minus sint libero reiciendis sed
        laudantium, veritatis voluptate distinctio. Quaerat officiis nesciunt
        laudantium distinctio soluta nostrum eos inventore magnam perspiciatis
        culpa assumenda commodi minima, similique iste exercitationem reiciendis
        repellat temporibus aliquid consequuntur fugiat iusto. Illo, laudantium
        aperiam? Repellat odit et vero esse ipsa quisquam, corporis officiis
        nihil perferendis quis officia quasi sequi.
      </h5>
    </motion.div>
  );
};

export default Scroll;
