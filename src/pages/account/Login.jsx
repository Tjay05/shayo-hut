import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="rule my-12 flex-col">
      <h1 className="text-black text-3xl font-semibold font-[Poppins] mb-6">Log In</h1>

      <form className="my-8">
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
        <button className="submit-btn">Log In</button>
        <p className="text-center text-sm font-normal font-[Inter]">Don't have an account? <Link className="text-[#EF4444] underline" to='signup'>Sign Up</Link></p>
      </form>
    </div>
  );
}
 
export default Login;