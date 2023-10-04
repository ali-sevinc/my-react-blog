import { FormEvent, useState, ChangeEvent } from "react";
import ReactDOM from "react-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import { emailRegex } from "@/helpers/functions";
import { MessageType } from "@/helpers/types";

import useContact from "./useContact";
import Loader from "../ui/Loader";
import {
  Actions,
  Area,
  Container,
  Control,
  ErrorMessage,
  Form,
  InputsContainer,
} from "../ui/Contact";

const initialState = {
  email: "",
  message: "",
  name: "",
};

function ContactForm() {
  const [values, setValues] = useState<MessageType>(initialState);
  const [isError, setIsError] = useState<boolean>(false);
  const { sendMessage, isLoading } = useContact();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { email, name, message } = values;
    if (
      !email ||
      !name ||
      !message ||
      !emailRegex.test(email) ||
      name.trim().length === 0 ||
      message.trim().length < 5
    ) {
      setIsError(true);
      return;
    }

    toast.info("Sending Message", {
      icon: <Loader />,
    });
    const { resData } = await sendMessage(values);
    const { data, error } = resData;
    if (!error) {
      toast.dismiss();
      setValues(initialState);
      toast.success(data?.message || "Success..");
    } else {
      toast.dismiss();
      toast.error(error);
    }
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setIsError(false);
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  return (
    <Container>
      <h1>Soru gönder</h1>
      {isError && (
        <ErrorMessage>
          Geçeriz email, isim ya da mesaj. Lütfen girdiğiniz verileri tekrar
          kontrol edin.
        </ErrorMessage>
      )}
      <Form onSubmit={handleSubmit}>
        <InputsContainer>
          <Control>
            <label htmlFor="email">Email Adresin</label>
            <input
              disabled={isLoading}
              value={values.email}
              onChange={handleChange}
              name="email"
              id="email"
              type="email"
              required
            />
          </Control>
          <Control>
            <label htmlFor="name">Adın</label>
            <input
              disabled={isLoading}
              value={values.name}
              onChange={handleChange}
              id="name"
              name="name"
              type="text"
              required
            />
          </Control>
        </InputsContainer>
        <Area>
          <label htmlFor="message">Mesajın</label>
          <textarea
            disabled={isLoading}
            value={values.message}
            onChange={handleChange}
            name="message"
            id="message"
            rows={5}
          />
        </Area>
        <Actions>
          <button disabled={isError || isLoading}>
            {isLoading ? "Gönderiliyor.." : "Mesajı Gönder"}
          </button>
        </Actions>
      </Form>

      {typeof window !== "undefined" ? (
        ReactDOM.createPortal(
          <ToastContainer
            autoClose={3000}
            position="top-center"
            hideProgressBar={false}
            newestOnTop={true}
          />,
          document.getElementById("toastly")!
        )
      ) : (
        <ToastContainer
          autoClose={3000}
          position="top-center"
          hideProgressBar={false}
          newestOnTop={true}
        />
      )}
    </Container>
  );
}

export default ContactForm;
