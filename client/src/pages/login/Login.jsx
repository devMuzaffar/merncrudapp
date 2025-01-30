import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center section-padding">
      {/* Sign Up Window */}
      <div className="flex  flex-row-reverse items-start justify-evenly gap-2 rounded-2xl bg-white shadow-lg flex-wrap md:w-full p-6 md:p-8 md:px-12">
        {/* Forms */}
        <div className="h-full my-auto">
          <LoginForm />
        </div>

        {/* Image */}
        <div className="hidden select-none w-96 md:block">
          <img src="./login.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
