import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  BsFillPersonFill,
  BsEnvelopeFill,
  BsFillTelephoneFill,
  BsPersonBadge,
} from "react-icons/bs";
import { BsLockFill, BsLock } from "react-icons/bs";
import { useNavigate } from "react-router";
import postRegister from "../../../services/registerService";
const formProps = { className: "ps-5" };
const iconProps = {
  className:
    "bi bi-envelope position-absolute top-50 start-0 translate-middle-y ms-3",
};

const BsRegForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  let name, value;

  // Single method - Manage all Inputs
  const handleInputs = (e) => {
    // name="VALUE"
    name = e.target.name;

    // value="VALUE"
    value = e.target.value;

    // Add Existing while Update [NAME] : VALUE
    setUser({ ...user, [name]: value });
  };

  // Submit Data to Backend
  const submitForm = async (e) => {
    e.preventDefault();

    const register = await postRegister(user);
    if (register) {
      navigate("/login");
    }
  };

  return (
    <Form onSubmit={submitForm} method="POST" className="flex flex-col gap-3">
      {/* Name */}
      <div className="position-relative">
        <Form.Control
          {...formProps}
          placeholder="Your Name"
          name="name"
          value={user.name}
          onChange={handleInputs}
        />
        <BsFillPersonFill {...iconProps} />
      </div>

      {/* Email */}
      <div className="position-relative">
        <Form.Control
          {...formProps}
          type="email"
          placeholder="Your email"
          name="email"
          value={user.email}
          onChange={handleInputs}
        />
        <BsEnvelopeFill {...iconProps} />
      </div>

      {/* Mobile Number */}
      <div className="position-relative">
        <Form.Control
          {...formProps}
          placeholder="Mobile Number"
          name="phone"
          value={user.phone}
          onChange={handleInputs}
        />
        <BsFillTelephoneFill {...iconProps} />
      </div>

      {/* Profession */}
      <div className="position-relative">
        <Form.Control
          {...formProps}
          placeholder="Your Profession"
          value={user.work}
          name="work"
          onChange={handleInputs}
        />
        <BsPersonBadge {...iconProps} />
      </div>

      {/* Password */}
      <div className="position-relative">
        <Form.Control
          {...formProps}
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleInputs}
        />
        <BsLockFill {...iconProps} />
      </div>

      {/* Confirm Password */}
      <div className="position-relative">
        <Form.Control
          {...formProps}
          type="password"
          placeholder="Confirm Your Password"
          name="cpassword"
          value={user.cpassword}
          onChange={handleInputs}
        />
        <BsLock {...iconProps} />
      </div>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default BsRegForm;
