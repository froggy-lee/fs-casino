import * as S from "./styles";
import {
  BankIcon,
  AccountNumberIcon,
  CodeIcon,
} from "../../../../../public/svg/icons/register";

function BankInfo({ formik }: { formik: any }) {
  const { values, errors, handleChange } = formik;
  return (
    <S.Wrapper className="mt-4 pt-4">
      <S.TitleArticle>Bank Account Information</S.TitleArticle>
      <S.Form>
        <div>
          <S.Label>
            <BankIcon />
            Bank Name*
          </S.Label>
          <div>
            <input
              type="text"
              name="bank_name"
              placeholder="Bank Name"
              value={values.bank_name}
              onChange={handleChange}
            />
          </div>
          <S.Error>{errors.bank_name}</S.Error>
        </div>
        <div>
          <S.Label>
            <AccountNumberIcon />
            Bank Number*
          </S.Label>
          <div>
            <input
              type="text"
              name="bank_number"
              placeholder="Bank number"
              value={values.bank_number}
              onChange={handleChange}
            />
          </div>
          <S.Error>{errors.bank_number}</S.Error>
        </div>
        <div>
          <S.Label>
            <CodeIcon />
            Bank Account
          </S.Label>
          <div>
            <input
              type="text"
              name="bank_account"
              value={values.bank_account}
              onChange={handleChange}
              placeholder="Bank Account"
            />
          </div>
          <S.Error>{errors.bank_account}</S.Error>
        </div>
      </S.Form>
    </S.Wrapper>
  );
}

export default BankInfo;
