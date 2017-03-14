import React, { PropTypes } from 'react';
import { pictureBox, multipleRow } from '../styles/styles.scss';


const ArtShow = ({ data }) =>
    <div className={multipleRow}>
        <p>{data.name}  {data.price} </p>
        <p>{data.artist}</p>
        <img className={pictureBox} src={data.img}/>
    </div>;

ArtShow.propTypes = {
    data: PropTypes.object
};

export default ArtShow;
