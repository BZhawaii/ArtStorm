import React, { PropTypes } from 'react';
import { pictureBox, multipleRow } from '../styles/styles.scss';
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';

const ArtShow = ({ data }) =>
    // <div className={multipleRow}>
    //     <p>{data.name}  {data.price} </p>
    //     <p>{data.artist}</p>
    //     <img className={pictureBox} src={data.img}/>
    // </div>;
    <div className={multipleRow}>
      <Row className={pictureBox}>
        <Col>
          <Card header={<CardTitle reveal image={data.img} waves="light"/>}
            title={data.name}
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="/artistDetailsShow">This is a link</a></p>
          </Card>
        </Col>
      </Row>
    </div>;
      

ArtShow.propTypes = {
    data: PropTypes.object
};

export default ArtShow;
