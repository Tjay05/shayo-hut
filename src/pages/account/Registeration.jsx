import { useState } from "react";
import OTPForm from "../../components/OTPForm";
import Signup from "../../components/Signup";

const Register = () => {
  const [email, setEmail] = useState(null);

  return (
    <>
      {!email ? (
        <Signup onSent={setEmail} />
      ) : (
        <OTPForm email={email} />
      )}
    </>
  );
}
 
export default Register;