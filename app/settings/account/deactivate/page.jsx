import React from "react";
import { FaCheck } from "react-icons/fa";
const DeactivateAccount = () => {
  return (
    <div>
      <section className="padding1rem flex column gap1rem">
        <h3 className="red">Deactivate your account</h3>
        <p className="font12 red opacity07">
          Are you sure you want to deactivate your account?
        </p>
      </section>

      <section className="flex gap1rem padding1rem column">
        <p className="font14 red fontW600 padding05rem background2">
          DEACTIVATE YOUR ACCOUNT. WARNING!!! THIS ACTION CAN&apos;T BE
          REVERSED!
        </p>
        <section className="flex align_center gap1rem paddingLeft2rem">
          <div className="padding05rem blue_background pointer flex align_center">
            <FaCheck className="font22 white-black " />
          </div>
          <p className="font14">Click to deactivate</p>
        </section>
      </section>
    </div>
  );
};

export default DeactivateAccount;
