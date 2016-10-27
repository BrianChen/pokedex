import React from 'react';
import { withRouter } from 'react-router';

const Item = ({ router, item, pokeId }) => {
  const handleClick = url => {
    const pathname = `/pokemon/${pokeId}` + url;
    router.push(pathname);
  };
  return (
    <img onClick={ () => handleClick(`/items/${item.id}`)} key={item.id} src={item.image_url}></img>
  );
};

export default withRouter(Item);
