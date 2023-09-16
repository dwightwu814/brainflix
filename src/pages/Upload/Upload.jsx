import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Upload.scss";
import UploadThumbnail from "../../assets/images/upload-thumbnail.jpg";
import PublishIcon from "../../assets/images/icons/publish.svg";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/utils/Button/Button";
import LightButton from "../../components/utils/LightButton/LightButton";

function UploadFormMain() {
  return (
    <div className="upload-page__form">
      <section className="upload-page__form--first">
        <div className="upload-page__label">Video thumbnail</div>
        <img
          className="upload-page__thumbnail"
          src={UploadThumbnail}
          alt="Upload Thumbnail"
        />
      </section>
      <section className="upload-page__form--second">
        <div>
          <div className="upload-page__label">Title your video</div>
          <input className="upload-page__title-input" type="text" />
        </div>

        <div>
          <div className="upload-page__label">Add a video description</div>
          <textarea className="upload-page__description-input" type="text" />
        </div>
      </section>
    </div>
  );
}

function UploadFormSubmit() {
  const [buttonText, setButtonText] = useState("PUBLISH");
  const navigate = useNavigate();

  const handleSubmit = () => {
    setButtonText("PUBLISHING...");
    setTimeout(() => {
      setButtonText("PUBLISHED!");
      setTimeout(() => {
        navigate("/");
      }, 500);
    }, 1000);
  };

  return (
    <div className="upload-page__submit">
      <div className="upload-page__button">
        <LightButton className="upload-page__button--publish" text="Cancel" />
      </div>
      <div className="upload-page__button">
        <Button
          className="upload-page__button--publish"
          text={buttonText}
          icon={PublishIcon}
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
}

function UploadForm() {
  return (
    <form>
      <UploadFormMain />
      <UploadFormSubmit />
    </form>
  );
}

export default function UploadPage() {
  const { userName } = useParams();
  return (
    <>
      <Navbar userName={userName} />
      <section className="section upload-page">
        <section className="upload-page__title">
          <h1 className="upload-page__title--text">Upload Video</h1>
        </section>
        <UploadForm />
      </section>
    </>
  );
}
