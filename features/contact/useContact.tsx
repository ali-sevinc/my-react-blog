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

    const resData: {
      data: { message: string; newMessage?: {} };
      error: string | null;
    } = {
      data: { message: "" },
      error: null,
    };
    if (!res.ok) {
      const errData = await res.json();
      resData.error = errData.message || "Something went wrong...";
    } else {
      resData.data = await res.json();
    }
    setIsLoading(false);
    return { resData };
  }

  return { sendMessage, isLoading };
}

export default useContact;
