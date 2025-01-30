import BsRegForm from "./BsRegForm";


const RegisterForm = () => {
  return (
    <div className="flex flex-col gap-4 h-full sm:w-96 md:w-80">
      {/* Title */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Sign Up</h2>
      </div>

      {/* Forms */}
      <BsRegForm />

    </div>
  );
};

export default RegisterForm;
