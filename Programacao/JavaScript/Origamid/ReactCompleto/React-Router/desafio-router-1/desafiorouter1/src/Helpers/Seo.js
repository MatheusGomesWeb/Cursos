import React from 'react';

const Seo = ({ titulo, description }) => {
  React.useEffect(() => {
    document.title = titulo;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', description);
  }, [titulo, description]);

  return <></>;
};

export default Seo;
