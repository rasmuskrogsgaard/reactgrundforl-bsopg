import style from "./form.module.scss";
import img1 from "../../assets/UN-Logo-Large.png";
const MyForm = () => {
  return (
    <div className={style.Form_container}>
      <img src={img1}></img>

      <form>
        <input placeholder="navn"></input>
        <input placeholder="email"></input>
        <input placeholder="tlf"></input>
        <textarea placeholder="besked"></textarea>
        <button>Fortryd</button>
        <button>Send</button>
      </form>
    </div>
  );
};

export default MyForm;
