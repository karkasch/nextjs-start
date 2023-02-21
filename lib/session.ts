const sessionOptions = {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "myappiecoook",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export default sessionOptions;
