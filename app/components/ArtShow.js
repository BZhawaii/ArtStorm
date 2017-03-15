import React, { PropTypes } from 'react';
import { pictureBox, multipleRow } from '../styles/styles.scss';

const ArtShow = ({ data }) =>
    <div className={multipleRow}>
        <p>{data.name}  {data.price} </p>
        <p>{data.artist}</p>
        <img className={pictureBox} src={data.img}/>
    </div>;
    // <div>
    //   <div className="col s12 m4 l4">
    //       <div className="card">
    //           <div className="card-image waves-effect waves-block waves-light">
    //               <img className="activator" src={data.image}/>
    //           </div>
    //           <div className="card-content">
    //               <span className="card-title activator grey-text text-darken-4">Project Title <i className="mdi-navigation-more-vert right">{data.name}</i></span>
    //               <p><a href="#">Project link</a></p>
    //           </div>
    //           <div className="card-reveal">
    //               <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
    //               <p>Here is some more information about this project that is only revealed once clicked on.</p>
    //           </div>
    //       </div>
    //   </div>
    // </div>; Tara we can use this code onlyl if we can import Materialize

ArtShow.propTypes = {
    data: PropTypes.object
};

export default ArtShow;
