export const globalErrorHandler = (error, req, res, next) => {
  const code = error.status || 500;
  res.status(code).json({
    status: "error",
    message: error.message,
  });
};
