import React from 'react';

const ItemDetail = ({item}) => (
  <ul>
    <li>{item.name}</li>
    <li>{item.price}</li>
    <li>{item.happiness}</li>
  </ul>
);
