import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsLockFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { UserContext } from "../../../context/userContext";
import postLogin from "../../../services/loginService";
const formProps = { className: "ps-5" };
const iconProps = {
  className:
    "bi bi-envelope position-absolute top-50 start-0 translate-middle-y ms-3",
};

const LoginForm = () => {
  const { setIsLoggedIn } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const login = await postLogin({ setIsLoggedIn, email, password });
    if (login) {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center sm:w-96 md:w-80">
      {/* Title */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Sign In</h2>
      </div>

      {/* Forms */}
      <Form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        {/* Email */}
        <div className="position-relative">
          <Form.Control
            {...formProps}
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <BsEnvelopeFill {...iconProps} />
        </div>

        {/* Password */}
        <div className="position-relative">
          <Form.Control
            {...formProps}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <BsLockFill {...iconProps} />
        </div>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
