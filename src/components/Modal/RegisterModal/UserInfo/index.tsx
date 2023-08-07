import * as S from "./styles";
import {
  UserIcon,
  MobileIcon,
  KeyIcon,
  HolderIcon,
} from "../../../../../public/svg/icons/register";

function UserInfor({ formik }: { formik: any }) {
  const { values, errors, handleChange } = formik;
  return (
    <article className="mt-3">
      <S.TitleArticle>General Information</S.TitleArticle>
      <S.Form>
        <div>
          <S.Label>
            <UserIcon />
            User Name*
          </S.Label>
          <div>
            <input
              type="text"
              name="account"
              placeholder="User Name"
              value={values.account}
              onChange={handleChange}
            />
          </div>
          <S.Error>{errors.account}</S.Error>
        </div>
        <div>
          <S.Label>
            <MobileIcon />
            Mobile No.*
          </S.Label>
          <div>
            <input
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Only numbers can be entered "
            />
          </div>
          <S.Error>{errors.phone}</S.Error>
        </div>
        <div>
          <S.Label>
            <KeyIcon />
            Password*
          </S.Label>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <S.Error>{errors.password}</S.Error>
        </div>
        <div>
          <S.Label>
            <KeyIcon />
            Confirm Password
          </S.Label>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
          <S.Error>{errors.confirmPassword}</S.Error>
        </div>
        <div>
          <S.Label>
            <UserIcon />
            Nick Name*
          </S.Label>
          <div>
            <input
              type="text"
              name="nickname"
              placeholder="Nick Name"
              value={values.nickname}
              onChange={handleChange}
            />
          </div>
          <S.Error>{errors.nickname}</S.Error>
        </div>
        <div>
          <S.Label>
            <HolderIcon />
            Holder
          </S.Label>
          <div>
            <input
              type="text"
              name="domain_info"
              value={values.domain_info}
              onChange={handleChange}
              placeholder="Change of account holder is not possible"
            />
          </div>
          <S.Error>{errors.domain_info}</S.Error>
        </div>
      </S.Form>
    </article>
  );
}

export default UserInfor;
