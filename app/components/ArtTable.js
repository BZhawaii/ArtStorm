import React, { PropTypes } from 'react';
import ArtShow from './ArtShow';

const products = [
  { category: 'paintings', price: '$49.99', artist: 'Pat Riley', name: 'Eye Ball', img: 'app/images/eyeBall.jpeg' },
  { category: 'paintings', price: '$9.99', artist: 'Pat Riley', name: 'Grafitti Art', img: 'app/images/grafittiArt.jpeg'},
  { category: 'paintings', price: '$29.99', artist: 'Pat Riley', name: 'Ladies Face', img: 'app/images/ladyFace.jpeg'},
  { category: 'paintings', price: '$99.99', artist: 'Pat Riley', name: 'Umbrellas Flying', img: 'app/images/umbrellasFlying.jpg'},
  { category: 'sculptures', price: '$399.99', artist: 'Pat Riley', name: 'Ancient Chinese', img: 'app/images/chineseStuff.jpeg'},
  { category: 'sculptures', price: '$199.99', artist: 'Budha', name: 'Big Budha', img: 'app/images/bigBudha.jpeg'},
  { category: 'sculptures', price: '$199.99', artist: 'Budha', name: 'Baby Budha', img: 'app/images/babyBudhas.jpg'},
  { category: 'photos', price: '$199.99', artist: 'Puddy Cat', name: 'Bird Head', img: 'app/images/birdHead.jpg'},
  { category: 'photos', price: '$199.99', artist: 'Puddy Cat', name: 'Cats Eye', img: 'app/images/catEys.jpg'},
  { category: 'photos', price: '$199.99', artist: 'Puddy Cat', name: 'Chinese Cats', img: 'app/images/catsChinese.jpeg'},
  { category: 'photos', price: '$199.99', artist: 'Joe Cup', name: 'Puppy in a Cup', img: 'app/images/cupPup.jpeg'},
  { category: 'photos', price: '$199.99', artist: 'Ethan Doggie', name: 'Dog at Sunset', img: 'app/images/dogSunset.jpeg'},
  { category: 'paintings', price: '$199.99', artist: 'Ethan Fishy', name: 'Fish Art', img: 'app/images/fishArt.jpeg'},
  { category: 'photos', price: '$199.99', artist: 'Ethan Birdy', name: 'Hummingbird', img: 'app/images/hummingBird.jpeg'},
  { category: 'paintings', price: '$199.99', artist: 'Da Vinci', name: 'Mona Lisa', img: 'app/images/monaLisa.jpeg'},
  { category: 'paintings', price: '$199.99', artist: 'Da Vinci', name: 'Mother Mary', img: 'app/images/motherMary.jpeg'}

];

const ArtTable = ({ filter }) => {
    let rows = [];

    products.forEach((p) => {
        const nameLC = p.name.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (nameLC.indexOf(filterLC) !== -1) {
            rows.push(
                <ArtShow key={p.name} data={p} />
            );
        }
    });

    return <div> {rows} </div>;
};

ArtTable.propTypes = {
    filter: PropTypes.string
};

export default ArtTable;
