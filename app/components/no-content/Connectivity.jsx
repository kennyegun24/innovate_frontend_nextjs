import Image from "next/image";
import connectError from "public/connect-err.png";

const ConnectivityProblem = ({ text }) => {
  return (
    <div className="flex justify_center column align_center width100 padding1rem">
      <Image
        className="object-cover not-found-profile-image"
        src={connectError}
        alt="not found"
        style={{ filter: "grayscale(50%)" }}
      />
      <p className="not-found-profile-text">{text}</p>
    </div>
  );
};

export default ConnectivityProblem;
