export const baseUrl = "http://localhost:5500"; // valid url

export const randomId = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
};
