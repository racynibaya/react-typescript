import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface Props {
  isClicked: boolean;
  onHandleClick: () => void;
}
const Like = ({ onHandleClick, isClicked }: Props) => {
  return (
    <div>
      {isClicked ? (
        <AiFillHeart
          color='red'
          size={50}
          onClick={onHandleClick}
          style={{ transition: 'all 3s' }}
        />
      ) : (
        <AiOutlineHeart
          color='red'
          size={50}
          onClick={onHandleClick}
          style={{ transition: 'all 3s' }}
        />
      )}
    </div>
  );
};

export default Like;
