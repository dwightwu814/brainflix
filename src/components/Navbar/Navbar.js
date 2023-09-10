import React from "react";
import "./Navbar.scss";
import Button from "../utils/Button/Button";
import Logo from "../../assets/images/logo.svg";
import ProfilePhoto from "../../assets/images/user-profile-photo.jpg";
import UploadIcon from "../../assets/images/icons/upload.svg";

function Searchbar() {
  return (
    <form>
      <input
        className="navbar__menu--search"
        type="text"
        placeholder="Search"
      />
    </form>
  );
}

export default function Navbar() {
  return (
    <section className="section navbar">
      <img className="navbar__logo" src={Logo} alt="logo" href="." />
      <div className="navbar__menu">
        <Searchbar />
        <div className="navbar__menu--button">
          <Button icon={UploadIcon} text="Upload" />
        </div>
        <img
          className="navbar__menu--profile"
          src={ProfilePhoto}
          alt="profile"
        />
      </div>
    </section>
  );
}
