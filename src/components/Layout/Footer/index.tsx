import React from "react";
import * as S from "./styles";
import Image from "next/image";
import HelpCenter from "./HelpCenter";
import SiteMap from "./SiteMap";

function Footer() {
  return (
    <S.Footer>
      <article className="container row">
        <div className="col-12 col-lg">
          <div>
            <Image
              src={"/images/logo-footer.png"}
              width={335}
              height={48}
              alt="logo"
            />
          </div>
          <S.Des className="my-3">
            COPYRIGHT 2020, KCASINO. ALL RIGHTS RESERVED. GAMBLING CAN BE
            ADDICTIVE, PLEASE PLAY RESPONSIBLY. FOR MORE INFORMATION ON SUPPORT
            TOOLS, PLEASE VISIT OUR RESPONSIBLE GAMBLING PAGE
          </S.Des>
        </div>
        <div className="col-12 col-lg">
          <HelpCenter />
        </div>
        <div className="col-12 col-lg">
          <SiteMap />
        </div>
      </article>
    </S.Footer>
  );
}

export default Footer;
