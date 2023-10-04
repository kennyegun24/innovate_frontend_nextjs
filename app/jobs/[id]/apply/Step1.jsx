import React from "react";

const Step1 = ({ input, form }) => {
  return (
    <form className={`flex column gap1rem ${form}`}>
      <div className="flex column gap05rem">
        <label className="font12" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name=""
          id="name"
          placeholder="Name"
          className={input}
        />
      </div>

      <div className="flex column gap05rem">
        <label className="font12" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name=""
          id="email"
          placeholder="Email address..."
          className={input}
        />
      </div>
      <div className="flex column gap05rem">
        <label className="font12" htmlFor="country">
          Country
        </label>
        <input
          type="text"
          name=""
          id="country"
          placeholder="Contry"
          className={input}
        />
      </div>
      <div className="flex column gap05rem">
        <label className="font12" htmlFor="States">
          State
        </label>
        <input
          type="text"
          name=""
          id="states"
          placeholder="State"
          className={input}
        />
      </div>
      <div className="flex column gap05rem">
        <label className="font12" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          name=""
          id="address"
          placeholder="Address"
          className={input}
        />
      </div>
    </form>
  );
};

export default Step1;
