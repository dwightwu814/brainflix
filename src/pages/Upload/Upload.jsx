import React from "react";
import "./Upload.scss";

import Navbar from "../../components/Navbar/Navbar";

export default function UploadPage() {
  return (
    <>
      <Navbar />
      <section className="section below">
        <section className="upload__title">
          <h1 className="upload__title--text">Upload Video</h1>
        </section>
      </section>
    </>
  );
}
