import React from 'react';
import { MouseEvent, useState } from 'react';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Like = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: MouseEvent) => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      {isClicked ? (
        <AiFillHeart color='#ff6b81' size={50} onClick={handleClick} />
      ) : (
        <AiOutlineHeart color='#ff6b81' size={50} onClick={handleClick} />
      )}
    </>
  );
};

export default Like;
