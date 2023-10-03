import { useState } from "react";

function useContact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function sendMessage(body: {
    email: string;
    name: string;
    message: string;
  }) {
    setIsLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let error;
    let data;
    if (!res.ok) {
      const errData = await res.json();
      error = errData.message || "Something went wrong...";
    } else {
      data = await res.json();
    }
    setIsLoading(false);
    return { error, data };
  }

  return { sendMessage, isLoading };
}

export default useContact;
