"use client";
import { listHelpCenter } from "./data";
import Image from "next/image";
import * as S from "./styles";

function HelpCenter() {
  return (
    <article>
      <S.Title>Help Center</S.Title>
      <div className="row mt-3">
        {listHelpCenter.map((item) => {
          return (
            <div className="col text-center" key={item.name}>
              <div>
                <Image src={item.url} width={60} height={60} alt={item.name} />
              </div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
export default HelpCenter;
