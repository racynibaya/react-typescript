import React, { useState } from 'react';

interface Props {
  maxCount?: number;
}

const ExpandableText = ({ maxCount }: Props): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  let text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus atque
    quibusdam, voluptate voluptates natus distinctio corrupti enim at.
    Deserunt in, repudiandae nulla molestiae doloremque sunt magnam odio natus
    temporibus aliquid explicabo dolores, alias rerum ab eaque iure ex
    delectus consequuntur recusandae, expedita minima ea quis eveniet. Esse
    eum alias possimus facere voluptatem, cumque laborum eius ipsa, cum magnam
    voluptatibus qui quibusdam rem pariatur ipsum minus soluta expedita fugit.
    Impedit maiores, iusto fuga omnis non sed sapiente quae error reiciendis?
    Illo, voluptatum quisquam. Excepturi reiciendis pariatur accusantium vero
    nostrum consectetur provident aliquid reprehenderit similique deserunt
    molestias alias hic quia ut, laboriosam omnis veniam possimus fugiat iusto
    corrupti impedit optio repellendus. Ipsa a error laborum. Non voluptatum
    dolores temporibus vel saepe id expedita atque? Id libero ad quaerat optio
    consequuntur incidunt numquam animi, qui nulla rerum ullam quisquam omnis
    labore quo molestias quod repudiandae ipsum quasi possimus. Illo in
    provident error voluptates similique totam, quidem cumque maiores quis
    autem quibusdam ipsa quam rem sequi adipisci, vitae nisi eveniet. Sapiente
    vitae nisi placeat laboriosam tempore nobis reiciendis fugiat, ut in
    dolore quia libero non alias magni similique officiis rem numquam.
    Blanditiis ab reprehenderit ullam! Exercitationem, alias reiciendis
    eligendi aliquam dolorum saepe vitae, sequi natus at explicabo quaerat
    quas harum atque commodi cumque, nulla assumenda amet ea itaque ipsam qui!
    Natus sequi dolores a ex delectus nostrum, nobis impedit recusandae
    corrupti! Esse, voluptatum beatae temporibus aperiam, quia nesciunt
    dolores quod odio excepturi amet eveniet pariatur alias ullam voluptatem
    architecto minus autem recusandae non at eaque ratione illum quam. Non
    earum necessitatibus facilis exercitationem voluptatibus quidem dolorum
    vel labore dolor porro hic quod amet adipisci praesentium quasi, voluptas
    dolore et. Voluptate ipsum quasi deleniti dolores numquam magnam sit,
    recusandae velit, iure, earum praesentium rerum possimus. Explicabo
    excepturi iste ea repudiandae deserunt, delectus quo, fuga perspiciatis
    officia laboriosam impedit, commodi rerum quis illo porro at voluptate eos
    beatae animi repellat possimus. Dignissimos porro repellat nam aspernatur
    doloremque distinctio dolorum ipsum alias nulla veritatis rerum, ea
    ratione quisquam tenetur? Qui, dolores perferendis. Enim labore
    laboriosam, delectus ducimus voluptatem nesciunt fugit vero unde incidunt
    error consequatur tenetur vel veritatis perspiciatis? Ea architecto quod
    numquam tempore fugit amet qui tenetur voluptates, autem, quas veniam
    itaque ducimus, maiores nemo beatae quis! Vero harum fugit debitis culpa
    exercitationem assumenda autem? Dolorem nulla sit aperiam architecto
    consectetur. Facere labore odit asperiores voluptatum ducimus in
    quibusdam, voluptates, ut ratione tempore consequatur sint esse!
    `;

  text = expanded ? text : `${text.slice(0, maxCount)}...`;

  console.log(text);

  return (
    <div>
      {text}
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Close' : 'See more'}
      </button>
    </div>
  );
};

export default ExpandableText;
