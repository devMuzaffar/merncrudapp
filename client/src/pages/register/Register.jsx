import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div className="h-full flex justify-center items-center section-padding">
      {/* Sign Up Window */}
      <div className="flex items-start justify-evenly gap-2 rounded-2xl bg-white shadow-lg flex-wrap md:w-full p-6 md:p-8">
        {/* Forms */}
        <RegisterForm />

        {/* Image */}
        <div className="hidden select-none w-96 h-full my-auto md:block">
          <img src="./register.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
