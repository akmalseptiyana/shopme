import { PrimaryButton } from "@/components/ui/button/primary-button";
import { FormGroup } from "@/components/ui/form/form-group";
import { InputText } from "@/components/ui/form/input-text";

export function LoginForm() {
  return (
    <form className="w-full bg-white py-[50px] px-5 text-center shadow-md sm:w-[544px] sm:px-14">
      <h3 className="josefin-bold text-3xl text-black">Login</h3>
      <p className="lato-regular mt-2 text-base text-[#9096B2]">
        Please Login using account detail bellow.
      </p>
      <FormGroup className="mt-9">
        <InputText
          type="email"
          placeholder="Email Address"
          className="h-[52px] w-full rounded-sm border border-[#C2C5E1] pl-3 text-base text-[#9096B2] outline-none"
        />
      </FormGroup>
      <FormGroup className="mt-6">
        <InputText
          type="password"
          placeholder="Password"
          className="h-[52px] w-full rounded-sm border border-[#C2C5E1] pl-3 text-base text-[#9096B2] outline-none"
        />
      </FormGroup>
      <p className="lato-regular mt-3 text-left text-base text-[#9096B2]">
        Forgot your password?
      </p>
      <PrimaryButton type="submit" className="lato-bold mt-6 w-full py-[14px]">
        Sign in
      </PrimaryButton>
      <p className="lato-regular mt-7 text-base text-[#9096B2]">
        Dont have an Account? Create account
      </p>
    </form>
  );
}
