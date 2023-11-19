import { Outlet } from "react-router-dom";
import RevelSection from "./../../components/revel-section/revel-section.component";
import Navegation from "../../components/navegation/Navegation";

// import { useAuth } from "../../context/authContext";
// import { useSelector } from "react-redux";
// import Spinner from "../../components/spinner/spinner.component";

import "./home.style.css";

export function Home() {
  // const { loading } = useAuth();
  // // const { active } = useSelector((state) => state.navegation);

  // if (loading) return <Spinner />;

  return (
    <RevelSection>
      <div className="section__interactive">
        <Navegation />

        <main className="main main--active">
          <Outlet />
        </main>
      </div>
    </RevelSection>
  );
}

export default Home;
