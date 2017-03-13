// ./src/components/book/BookForm.js
import React from 'react';

const ArtistForm = (props) => {
    // Collector variables
    let firstName, lastName, username, password, email, phoneNumber, websiteURL, portraitURL, bio, quickIntro;
    return (
      <form onSubmit={e => {
            e.preventDefault();
            // Assemble data into object
            var input = {
              firstName: firstName.value,
              lastName: lastName.value,
              username: username.value,
              password: password.value,
              email: email.value,
              phoneNumber: phoneNumber.value,
              websiteURL: websiteURL.value,
              portraitURL: portraitURL.value,
              bio: bio.value,
              quickIntro: quickIntro.value
            };
            // Call method from parent component
            // to handle submission
            props.submitArtistProfile(input);
            // Reset form
            e.target.reset();
          }}
      >//closes opening form tag
        <div className="">
          <label className="" for="firstName" >First Name: </label>
          <div className="">
            <input type="text" id="firstName" name="firstName" ref={node => firstName = node} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" for="lastName" >Last Name: </label>
          <div className="">
            <input type="text" id="lastName" name="lastName" ref={node => lastName = node} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" for="username" >First Name: </label>
          <div className="">
            <input type="text" id="username" name="username" ref={node => username = node} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" for="password" >First Name: </label>
          <div className="">
            <input type="text" id="password" name="password" ref={node => password = node} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" for="email" >First Name: </label>
          <div className="">
            <input type="email" id="email" name="email" ref={node => email = node} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" for="phoneNumber" >First Name: </label>
          <div className="">
            <input type="text" id="phoneNumber" name="phoneNumber" ref={node => phoneNumber = node} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" for="websiteURL" >First Name: </label>
          <div className="">
            <input type="URL" id="websiteURL" name="websiteURL" ref={node => websiteURL = node} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" for="portraitURL" >First Name: </label>
          <div className="">
            <input type="URL" id="portraitURL" name="portraitURL" ref={node => portraitURL = node} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" for="bio" >First Name: </label>
          <div className="">
            <input type="text" id="bio" name="bio" ref={node => bio = node} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" for="quickIntro" >First Name: </label>
          <div className="">
            <input type="text" id="quickIntro" name="quickIntro" ref={node => quickIntro = node} className="" />
          </div>
        </div>
        <br/>

      </form>
    );
};

export default ArtistForm;
