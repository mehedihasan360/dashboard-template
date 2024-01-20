function Login() {
  return (
    <div className="min-h-svh grid place-items-center bg-[#f2f2f2]">
      <div className="w-11/12 md:w-3/6 lg:w-3/12 form-container">
        <h1 className="text-center text-2xl">Admin Login</h1>
        <form>
          <p className="input-label">
            Email<span className="required-label">*</span>
          </p>
          <input
            type="text"
            className="input-field-style"
            placeholder="Email Address"
          />
          <p className="input-label">
            Password<span className="required-label">*</span>
          </p>
          <input
            type="password"
            className="input-field-style"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-primary_color text-white p-3 text-xs uppercase rounded-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
