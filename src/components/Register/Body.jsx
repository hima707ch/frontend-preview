import React from "react";
import UsernameInput from "./UsernameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import GenderSelect from "./GenderSelect";
import DateOfBirthInput from "./DateOfBirthInput";
import TermsAndConditionsCheckbox from "./TermsAndConditionsCheckbox";
import PrivacyPolicyCheckbox from "./PrivacyPolicyCheckbox";
import CaptchaVerification from "./CaptchaVerification";
import RegisterButton from "./RegisterButton";
import LoginRedirectLink from "./LoginRedirectLink";

const RegisterForm = () => {
  return (
    <div>
      <UsernameInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <GenderSelect />
      <DateOfBirthInput />
      <TermsAndConditionsCheckbox />
      <PrivacyPolicyCheckbox />
      <CaptchaVerification />
      <RegisterButton />
      <LoginRedirectLink />
    </div>
  );
};

export default RegisterForm;
