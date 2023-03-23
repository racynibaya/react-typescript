import React, { useEffect, useState } from 'react';

const ProductList = ({ category }: { category: string }) => {
  const [state, setState] = useState<string[]>([]);

  useEffect(() => {
    console.log('Effect');
    setState(['apple', 'mango']);
  }, [state]);
  return <div>ProductList</div>;
};

export default ProductList;
