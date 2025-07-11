import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="rule my-12 flex-col">
      <h1 className="text-black text-3xl font-semibold font-[Poppins] mb-6">Sign Up</h1>

      <form className="my-8">
        <div className="flex justify-between">
          <div className="w-[47%]">
            <label className="label" htmlFor="firstname">First Name</label>
            <input 
              id="firstname"
              type="text"
              placeholder="First name" 
              className="input-field"  
            />
          </div>
          <div className="w-[47%]">
            <label className="label" htmlFor="surname">Surname</label>
            <input
              id="surname" 
              type="text" 
              placeholder="Surname"
              className="input-field"  
            />
          </div>
        </div>
        <label className="label" htmlFor="dob">Date of birth</label>
        <input 
          id="dob"
          type="date" 
          className="input-field" 
        />
        <label className="label" htmlFor="gender">Gender</label>
        <select className="input-field" name="gender" id="gender">
          <option>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label className="label" htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Email"
          className="input-field"
        />
        <label className="label" htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Password" 
          className="input-field"
        />

        <div className="flex items-baseline gap-1">
          <input
            type="checkbox"
            id="terms"
          />
          <label htmlFor="terms" className="text-sm">I accept ShayoHut's Terms and Conditions</label>
        </div>

        <button className="bg-[#EF4444] text-xl font-semibold py-2 rounded-xl cursor-pointer font-[Poppins] text-white my-6 w-full">Sign Up</button>

        <p className="text-center text-sm font-normal font-[Inter]">Already have an account? <Link className="text-[#4B00E0] underline" to='/'>Log In</Link></p>
      </form>
    </div>
  );
}
 
export default Signup;