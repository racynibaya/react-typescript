import React, { Children, useState } from 'react';

interface Props {
  children: string;
  maxCount?: number;
}

const ExpandableText = ({ maxCount, children }: Props): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= 100) return <p>{children}</p>;

  const text = expanded ? children : children.substring(0, maxCount);

  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Less' : 'More'}
      </button>
    </p>
  );
};

export default ExpandableText;
