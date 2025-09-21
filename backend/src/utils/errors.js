export const  errorHandler = (type, error, message) => {
  console.log(message || "Server error occured in " + type);
  console.log(error);
}