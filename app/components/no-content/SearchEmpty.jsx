import Image from "next/image";
import emptySearch from "public/no-search.png";

const SearchEmpty = ({ text }) => {
  return (
    <div className="flex justify_center column align_center width100 padding1rem">
      <Image
        className="object-cover not-found-profile-image"
        src={emptySearch}
        alt="not found"
        style={{ filter: "grayscale(50%)" }}
      />
      <p className="not-found-profile-text">{text}</p>
    </div>
  );
};

export default SearchEmpty;
