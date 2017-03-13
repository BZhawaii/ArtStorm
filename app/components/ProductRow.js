import React, { PropTypes } from 'react';
import { pictureBox, multipleRow } from '../styles/styles.scss';


const ProductRow = ({ data }) =>
    <div className={multipleRow}>
        <p>{data.name}  {data.price} </p>
        <p>{data.artist}</p>
        <img className={pictureBox} src={data.img}/>
    </div>;

ProductRow.propTypes = {
    data: PropTypes.object
};

export default ProductRow;
