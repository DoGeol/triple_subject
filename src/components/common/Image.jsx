import React from 'react';

function Image(attr) {
  const { className, ...otherAttrs } = attr;
  return <img {...otherAttrs} />;
}

export default Image;
