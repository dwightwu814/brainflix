import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Button from "../utils/Button/Button";
import Logo from "../../assets/images/logo.svg";
import ProfilePhoto from "../../assets/images/user-profile-photo.jpg";
import UploadIcon from "../../assets/images/icons/upload.svg";

function Searchbar() {
  return (
    <form>
      <input className="navbar__search" type="text" placeholder="Search" />
    </form>
  );
}

export default function Navbar() {
  return (
    <section className="section navbar">
      <Link to="/" className="navbar__link">
        <img className="navbar__logo" src={Logo} alt="logo" href="." />
      </Link>
      <div className="navbar__menu">
        <Searchbar />
        <div className="navbar__button">
          <Button icon={UploadIcon} text="Upload" />
        </div>
        <img className="navbar__profile" src={ProfilePhoto} alt="profile" />
      </div>
    </section>
  );
}
