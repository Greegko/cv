const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: {
    tailwindcss: {
      content: ["./src/**/*.{html,tsx}"],
    },
  },
};
