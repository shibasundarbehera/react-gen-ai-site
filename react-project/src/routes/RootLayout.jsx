import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";


function RootLayout({ onCreatePost }) {
  return (
    <>
      <MainHeader onCreatePost={onCreatePost} />
      <Outlet />
      <div className="footer">
        <p>Made with ❤️ by Shiba</p>
      </div>
    </>
  );
}

export default RootLayout;