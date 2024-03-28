import Navbar from "@/components/Navbar";

//styles
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
  description: "Find your dream rental propery",
  keywords: "rental, find rentals, find properties, rent properties",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
