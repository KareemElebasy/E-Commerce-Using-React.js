import Shop from "../shop";
import { useSelector } from "react-redux";

function Home() {
  const counteGlobal = useSelector((state)=>state.counterStore.counter)

  return (
    <dir className="text-center pt-5">
      <h2 className="pb-5" >Welocome To Our Store , We Hope To See You Agian </h2>
      <h4>Counter is {counteGlobal}</h4>
      <Shop />
    </dir>
  );
}

export default Home;
