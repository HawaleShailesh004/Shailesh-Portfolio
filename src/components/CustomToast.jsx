import { Toaster } from "react-hot-toast";
const CustomToast = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      style: {
        padding: "14px 18px",
        fontSize: "15px",
        fontWeight: 500,
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      },
      success: {
        style: {
          background: "#10B981", // Tailwind emerald-500
          color: "white",
        },
        iconTheme: {
          primary: "white",
          secondary: "#10B981",
        },
      },
      error: {
        style: {
          background: "#EF4444", // Tailwind red-500
          color: "white",
        },
        iconTheme: {
          primary: "white",
          secondary: "#EF4444",
        },
      },
    }}
  />
);

export default CustomToast;
