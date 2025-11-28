import React, { useState } from "react";

const Resume = () => {
  const [open, setOpen] = useState(false);
  const pdfLink = "https://drive.google.com/file/d/11_uIrMqMKcAkMOdYRjP00_p-pX_grs2J/view?usp=drive_link";

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Download Button */}
      <a 
        href={pdfLink} 
        download
        style={{ display: "inline-block", marginBottom: "20px" }}
      >
        Download CV
      </a>

      {/* Small Preview */}
      <div 
        style={{ cursor: "pointer", marginTop: "20px" }} 
        onClick={() => setOpen(true)}
      >
        <embed 
          src={pdfLink} 
          type="application/pdf" 
          width="300px" 
          height="400px" 
        />
        <p>Click to enlarge</p>
      </div>

      {/* Modal for Large View */}
      {open && (
        <div 
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <embed 
            src={pdfLink} 
            type="application/pdf" 
            width="80%" 
            height="90%" 
          />
        </div>
      )}
    </div>
  );
};

export default Resume;
