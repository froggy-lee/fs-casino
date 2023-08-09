import React from "react";
import GeneralInfo from "./GeneralInfo";
import BankAccount from "./BankAccount";
import Image from "next/image";

function ProfilePage() {
  return (
    <section className="container mt-3">
      <div className="d-flex align-center">
        <Image
          src={"/images/profile-page.png"}
          width={40}
          height={40}
          alt="icon"
        />
        <span className="title-page ms-2">User Information</span>
      </div>
      <div className="row my-5">
        <article className="col">
          <GeneralInfo />
        </article>
        <article className="col">
          <BankAccount />
        </article>
      </div>
    </section>
  );
}

export default ProfilePage;
