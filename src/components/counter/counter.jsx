import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { increaceCount,descreaseCount } from "../../redux/counterSlice";
import './style.css';


function Counter () {

const counteGlobal = useSelector((state)=>state.counterStore.counter)

console.log(counteGlobal)

const dispatch = useDispatch();

const increace = ()=>{
    dispatch(increaceCount(1))
}
const decreace = ()=>{
    dispatch(descreaseCount(1))
}

    return (
        <>
        <div className="counter">

        <h1 className="heading">Counter</h1>
        <p className="counter-val">{counteGlobal}</p>
        
        </div>
        <div className="Btns">
        <button

          className="btn-counter"
          onClick={increace}
        >
          Increase Counter
        </button>

        <button
          className="btn-counter"
          onClick={decreace}
        >
          Decrease Counter
        </button>
      </div>
        </>
        
    );
  }

  export default Counter;