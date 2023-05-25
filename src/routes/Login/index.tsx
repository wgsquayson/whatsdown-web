import { useNavigate } from "react-router-dom";
import { Layout, Button, Form } from "../../components";
import { api } from "../../utils/api";
import { FormEvent, useMemo, useState } from "react";
import { AxiosError } from "axios";
import { Field } from "../../components/Form";

export const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoggingIn(true);

    try {
      const response = await api.post("/sessions", { email, password });

      localStorage.setItem("@whatsdown/token", response.data.token);

      navigate("/");
    } catch (err) {
      const { response } = err as AxiosError;

      const { error } = response?.data as Record<string, string>;

      alert(error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const fields: Field[] = useMemo(
    () => [
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
    [email, password]
  );

  return (
    <Layout>
      <Form
        fields={fields}
        buttonText="login"
        loading={isLoggingIn}
        onSubmit={handleSubmit}
      />
      <Button linksTo="/signup" variant="secondary">
        sign up
      </Button>
    </Layout>
  );
};
