import { useRef, useState } from "react";
import "./App.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ProgressBar } from "react-bootstrap";

function App() {
  const ref = useRef();
  const [img, setImg] = useState("");
  const [uploadPer, setUploadPer] = useState(0);

  const handleFile = (e) => {
    console.log(e.target.files);
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div style={{ background: "#ECEFF4", height: "100vh" }}>
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div
          className="d-flex flex-column align-items-center justify-content-between  w-25"
          style={{ background: "#3D4453", height: "80vh" }}
        >
          <div
            className="d-flex flex-column align-items-center justify-content-around h-100  w-25"
            style={{ marginTop: 100 }}
          >
            <p className="text-light">Uploading</p>
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                })}
                value={uploadPer}
                text={`${uploadPer}%`}
              />
            </div>
            <div style={{ width: 200, height: 200 }}>
              <ProgressBar now={uploadPer} />
            </div>
          </div>
        </div>
        <div
          className="d-flex
          flex-column
          align-items-center bg-white w-50"
          style={{ height: "70vh" }}
        >
          <h1 className="mt-5">Color Up</h1>
          <div
            className="d-flex
          flex-column
          align-items-center justify-content-center bg-white h-100 w-75"
          >
            {img && <img style={{ height: "40vh" }} src={img} alt="bw" />}

            <input
              onChange={handleFile}
              ref={ref}
              type="file"
              style={{ display: "none" }}
            />
            <button
              className="btn-primary mt-4 w-100"
              onClick={() => ref.current.click()}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
