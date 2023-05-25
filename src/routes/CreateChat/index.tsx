import { FormEvent, useMemo, useState } from "react";
import { Layout } from "../../components";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { Field, Form } from "../../components/Form";

export const CreateChat = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      await api.post("/chats", { emails: [email] });

      navigate("/");
    } catch (err) {
      const { response } = err as AxiosError;

      const { error } = response?.data as Record<string, string>;

      alert(error);
    } finally {
      setIsSubmitting(false);
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
    ],
    [email]
  );

  return (
    <Layout title="create chat">
      <Form
        fields={fields}
        buttonText="create"
        loading={isSubmitting}
        onSubmit={handleSubmit}
      />
    </Layout>
  );
};
