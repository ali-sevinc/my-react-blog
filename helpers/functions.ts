export function formatDate(date: string) {
  const formattedDate = new Date(date).toLocaleDateString("tr", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formattedDate;
}

export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
