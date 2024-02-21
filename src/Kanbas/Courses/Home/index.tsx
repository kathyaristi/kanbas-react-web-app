import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <ModuleList />
      </div>
      <div>
        <Status />
      </div>
    </div>
  );
}
export default Home;
