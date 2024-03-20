import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();

  console.log(location);
  return (
    <div>
      <Header />
      {navigation.state === "loading" ? (
        <RotatingLines
          strokeColor="red"
          visible={true}
          height="56"
          width="56"
        />
      ) : (
        <Outlet></Outlet>
      )}
      <Footer />
    </div>
  );
};

export default Home;
