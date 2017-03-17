// ./src/components/book/BookForm.js
import React, {PropTypes} from 'react';
import { bzformPadding, paddYourBottom } from '../styles/styles.scss';
import Axios from 'axios';
const apiUrl = 'https://art-storm.herokuapp.com/artist';


const ArtistForm = (props) => {
    // Collector variables
    let firstName;
    let lastName;
    let username;
    let password;
    let email;
    let phoneNumber;
    let websiteURL;
    let portraitURL;
    let bio;
    let quickIntro;

    return (
      <div className={bzformPadding}>
      <form  onSubmit={e => {
          e.preventDefault();
  // Assemble data into object
          var artist = {
              first: firstName.value,
              last: lastName.value,
              username: username.value,
              password_digest: password.value,
              email: email.value,
              phone: phoneNumber.value,
              website_url: websiteURL.value,
              portrait_url: portraitURL.value,
              bio: bio.value,
              quick_intro: quickIntro.value
          };
            // Call method from parent component
            // to handle submission
          // props.submitArtistProfile(artist);
            // Reset form
          e.target.reset();
          // Axios.post(apiUrl, artist)
            // .then(response => {
            //   console.log(response);
            // },
      }}
      >
        <div className={ paddYourBottom }>
        <h3>Please enter your profile info here.</h3>
        </div>

        <div id="mainForm">
          <label className="" htmlFor="firstName" >First Name: </label>
          <div className="">
            <input type="text" id="firstName" name="firstName" ref={node => {firstName = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="lastName" >Last Name: </label>
          <div className="">
            <input type="text" id="lastName" name="lastName" ref={node => {lastName = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="username" >Username: </label>
          <div className="">
            <input type="text" id="username" name="username" ref={node => {username = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="password" >Password: </label>
          <div className="">
            <input type="text" id="password" name="password" ref={node => {password = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="email" >email: </label>
          <div className="">
            <input type="email" id="email" name="email" ref={node => {email = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="phoneNumber" >Phone number: </label>
          <div className="">
            <input type="text" id="phoneNumber" name="phoneNumber" ref={node => {phoneNumber = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="websiteURL" >Website URL: </label>
          <div className="">
            <input type="URL" id="websiteURL" name="websiteURL" ref={node => {websiteURL = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="portraitURL" >Portrait URL: </label>
          <div className="">
            <input type="URL" id="portraitURL" name="portraitURL" ref={node => {portraitURL = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="bio" >Bio: </label>
          <div className="">
            <input type="text" id="bio" name="bio" ref={node => {bio = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="quickIntro" >Quick Intro: </label>
          <div className="">
            <input type="text" id="quickIntro" name="quickIntro" ref={node => {quickIntro = node;}} className="" />
          </div>
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
    // Axios.apiUrl
    // return Axios.post(apiUrl, artist)
    //   .then(response => {
    //     console.log(response);
};

// ArtistForm.propTypes = {
//     submitArtistProfile: PropTypes.function
// };

export default ArtistForm;
