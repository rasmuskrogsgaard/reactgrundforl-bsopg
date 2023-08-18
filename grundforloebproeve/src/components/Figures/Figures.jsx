import style from "./figures.module.scss";
import img1 from "../../assets/Image-Sustainability.jpg";
import img2 from "../../assets/Image-Leave-No-One.jpg";
import img3 from "../../assets/Image-Hunger.jpg";
const MainFigure = () => {
  return (
    <div className={style.figure_container}>
      <h2>UDFORDRINGER</h2>

      <p>
        Der er en lang række faktorer der har indvirkning på opfyldelsen af de
        mål, man gennem aftaler har forpligtiget sig til.
      </p>
      <figure>
        <figcaption>
          <h3>Vækst vs. bæredygtighed.</h3>
          <p>
            En overordnet udfordring er, at der mangler et mere nuanceret syn på
            sammenhængen mellem vækst og bæredygtighed. Vægtning mellem
            økonomisk vækst og påvirkninger af miljø og samfund. Opretholdes den
            nuværende globale, materielle vækst, øges presset på jordens
            ressourcer. De livsunderstøttende økosystemer bliver i stigende grad
            overbelastet, og uligheden i verden vil blive større. Leave no-one
            behind. I 2030-dagsordenen er inkluderet princippet om ”leave no one
            behind”. Princippet tilsiger, at alle lande skal opnå alle
            verdensmål, uden at nogen lades i stikken. Arbejdet med
            verdensmålene skal begynde med, at de fattigste og mest
            marginaliserede adresseres først. Dette er et vigtigt princip,
            hvortil også efterlevelsen af og respekten for menneskerettigheder
            er altafgørende. Med andre ord: “Leave No-One behind”.
          </p>
        </figcaption>
        <img src={img1}></img>
      </figure>

      <figure>
        <figcaption>
          <h3>Leave no-one behind.</h3>
          <p>
            I 2030-dagsordenen er inkluderet princippet om ”leave no one
            behind”. Princippet tilsiger, at alle lande skal opnå alle
            verdensmål, uden at nogen lades i stikken. Arbejdet med
            verdensmålene skal begynde med, at de fattigste og mest
            marginaliserede adresseres først. Dette er et vigtigt princip,
            hvortil også efterlevelsen af og respekten for menneskerettigheder
            er altafgørende. Med andre ord: “Leave No-One behind”.
          </p>
        </figcaption>
        <img src={img2}></img>
      </figure>

      <figure>
        <figcaption>
          <h3>Fattigdom og sult.</h3>
          <p>
            Det første af FN’s verdensmål handler om at afskaffe verdens
            fattigdom inden 2030. Det handler især om at give muligheder for
            mennesker i verdens fattigste lande. Verdensbanken definerer
            ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars
            om dagen – dvs. cirka 13 kroner. En stor udfordring, men vi er
            allerede godt på vej.
          </p>
        </figcaption>
        <img src={img3}></img>
      </figure>
    </div>
  );
};

export default MainFigure;
