import Navbar from "../components/Navbar";
export const Layout = ({ children }: any) => {
  return (
    <>
      <div >
        <Navbar />
        <div >{children}</div>
      </div>
    </>
  );
};