import { FormEvent, useMemo, useState } from "react";
import { Layout, Form } from "../../components";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import { AxiosError } from "axios";
import { Field } from "../../components/Form";

export const SignUp = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSigningUp(true);

    try {
      const response = await api.post("/users", { name, email, password });

      localStorage.setItem("@whatsdown/token", response.data.token);

      navigate("/");
    } catch (err) {
      const { response } = err as AxiosError;

      const { error } = response?.data as Record<string, string>;

      alert(error);
    } finally {
      setIsSigningUp(false);
    }
  };

  const fields: Field[] = useMemo(
    () => [
      {
        label: "name",
        onChange: (event) => setName(event.target.value),
        value: name,
      },
      {
        label: "e-mail",
        onChange: (event) => setEmail(event.target.value),
        type: "email",
        value: email,
      },
      {
        label: "password",
        onChange: (event) => setPassword(event.target.value),
        type: "password",
        value: password,
      },
    ],
    [name, email, password]
  );

  return (
    <Layout title="sign up">
      <Form
        fields={fields}
        buttonText="sign up"
        loading={isSigningUp}
        onSubmit={handleSubmit}
      />
    </Layout>
  );
};
