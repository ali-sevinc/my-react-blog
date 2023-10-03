import Head from "next/head";

import ContactForm from "@/features/contact/ContactForm";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Mesaj Gönder</title>
        <meta name="description" content="Mesajını gönder." />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
