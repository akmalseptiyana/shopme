import { FormGroup } from "@/components/ui/form/form-group";
import { InputText } from "@/components/ui/form/input-text";
import { PrimaryButton } from "@/components/ui/button/primary-button";

export function LoginForm() {
  return (
    <form className="w-full sm:w-[544px] bg-white shadow-md py-[50px] px-5 sm:px-14 text-center">
      <h3 className="text-3xl text-black josefin-bold">Login</h3>
      <p className="text-base text-[#9096B2] lato-regular mt-2">
        Please Login using account detail bellow.
      </p>
      <FormGroup className="mt-9">
        <InputText
          type="email"
          placeholder="Email Address"
          className="w-full h-[52px] text-base text-[#9096B2] border border-[#C2C5E1] pl-3 rounded-sm outline-none"
        />
      </FormGroup>
      <FormGroup className="mt-6">
        <InputText
          type="password"
          placeholder="Password"
          className="w-full h-[52px] text-base text-[#9096B2] border border-[#C2C5E1] pl-3 rounded-sm outline-none"
        />
      </FormGroup>
      <p className="text-base text-[#9096B2] lato-regular text-left mt-3">
        Forgot your password?
      </p>
      <PrimaryButton type="submit" className="w-full py-[14px] lato-bold mt-6">
        Sign in
      </PrimaryButton>
      <p className="text-base text-[#9096B2] lato-regular mt-7">
        Dont have an Account? Create account
      </p>
    </form>
  );
}
