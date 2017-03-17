// ./sec/components/book/ArtistDetails.js
import React, { PropTypes } from 'react';
import {stormImg1, cardImage, cardDiv, imgDiv, floatRight, stormButton, textBox } from '../styles/styles.scss';
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';
// import artistData from '../data/mockData';
// console.log('DATA', PropTypes.object);
// var bucket = {};
// artistData.forEach((p) => {
//   console.log(p);
//     // p.id == 1;
//     // bucket = p;
//     // <ArtistDetails key={p.id} data={p} />
//     console.log('p************', {p}s);
//     // return <div> Hello </div>;
// },
const ArtistDetailsShow = ({ data }) =>
<div id="mainPart">
      <div className={cardDiv}>
        <div className={imgDiv}>
          <div>
            <a href="#">
              <img className={stormImg1} src={data.img} alt="Placehold" />
            </a>
          </div>
      <div className={textBox}>
        <div className=''>
          <h4 className="media-heading">{data.name}</h4>
          <ul>
            <li><strong>Author: </strong>{data.artist}</li>
            <li><strong>Category: </strong>{data.category}</li>
            <li><strong>Info: </strong>{data.info}</li>
            <br/>
          </ul>
        </div>
        </div>
      </div>
      </div>;
</div>
ArtistDetailsShow.PropTypes = {
    data: PropTypes.object
};
export default ArtistDetailsShow;
