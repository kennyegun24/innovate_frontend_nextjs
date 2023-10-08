import React, { useState } from "react";

const Step2 = ({ input }) => {
  const [cv, setCv] = useState(null);
  console.log(cv);
  return (
    <div className="flex gap02rem background padding05rem">
      <div className="flex column gap05rem">
        <label className="font14 text_color" htmlFor="cv">
          Select C.V
        </label>
        <input
          type="file"
          name=""
          id="cv"
          style={{
            width: "fit-content",
          }}
          onChange={(e) => setCv(e.target.files[0])}
          className={`text_color `}
        />
      </div>
      {cv && (
        <embed
          src={URL.createObjectURL(cv)}
          type="application/pdf"
          width="70px"
          height="100px"
          style={{ overflow: "hidden" }}
        />
      )}
    </div>
  );
};

export default Step2;
