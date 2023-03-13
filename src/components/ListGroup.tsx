import React, { useState } from 'react';
import { MouseEvent } from 'react';

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedItems, setSelectedItems] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className='list-group'>
        {items.length === 0 ? (
          <p>No item found</p>
        ) : (
          items.map((item, i) => (
            <li
              key={item}
              className={`${
                i === selectedItems
                  ? 'list-group-item active'
                  : 'list-group-item'
              } `}
              onClick={() => setSelectedItems(i)}
            >
              {item}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default ListGroup;
