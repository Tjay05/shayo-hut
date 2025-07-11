import { useRef, useState } from "react";
// import { useVerifyOTP } from "../hooks/useVerifyOtp";

const OTPForm = ({ email }) => {
  const [otp, setOtp] = useState('');
  const otpRefs = useRef([]);

  // const { verifyOTP, isLoading, error, mssg } = useVerifyOTP();

  const handleChange = (i, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    setOtp((prevOtp) => {
      const newOtp = prevOtp.split("");
      newOtp[i] = value;
      return newOtp.join("");
    });

    if (value && i < otpRefs.current.length - 1) {
      otpRefs.current[i + 1].focus();
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      otpRefs.current[i - 1].focus();
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   await verifyOTP(email, otp);
  // }

  return (
    <div className="rule flex flex-col h-[100vh] justify-center">
      <h1 className="text-black text-3xl font-semibold font-[Poppins] mb-6">Verify Email Address</h1>
      <form className="bg-white max-w-100 rounded-sm p-5">
        <label className="label mb-6">Enter OTP sent to {email}:</label>
        <div className="w-full flex justify-evenly">
        {Array.from({ length: 4 }, (_, i) => (
          <input
            className="border-[#f1f3f6] border-2 text-center w-1/5 mb-8 rounded-full pl-3 py-2.5 text-lg bg-[#0047e00a] lg:w-1/7"
            key={i}
            type="number"
            maxLength="1"
            value={otp[i] || ""}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            ref={(ref) => (otpRefs.current[i] = ref)}
          />
        ))}
        </div>

        {<button className="submit-btn">Verify</button>}
        {/* {error && <div className="warning">{error}</div>}
        {isLoading && <button disabled className="submit-btn">Verifying otp...</button>}
        {mssg && <p className="text-green-600 text-sm font-semibold my-2 border rounded p-2 italic bg-[#39e9bc]">{mssg}</p>} */}
      </form>
    </div>
  );
}
 
export default OTPForm;