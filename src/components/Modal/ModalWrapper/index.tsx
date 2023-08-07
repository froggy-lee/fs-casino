import React, { ReactNode } from "react";
import * as S from "./styles";
import Image from "next/image";

function ModalWrapper(props: any) {
  const { children, modal, onToggle, title, iconTitle, styles } = props;

  const handleClickOutSide = () => {
    onToggle();
  };

  return (
    <S.BackDrop className="backdrop" onClick={handleClickOutSide}>
      <S.Dialog
        className="dialog py-3"
        style={styles}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="header">
          {(iconTitle || title) && (
            <S.Title className="title">
              {iconTitle && (
                <Image src={iconTitle} width={50} height={52} alt="title" />
              )}
              {title}
            </S.Title>
          )}
          <S.ButtonClose>
            <button onClick={onToggle} className="btn-close"></button>
          </S.ButtonClose>
        </div>
        <S.Main className="main">{children}</S.Main>
      </S.Dialog>
    </S.BackDrop>
  );
}

export default ModalWrapper;
