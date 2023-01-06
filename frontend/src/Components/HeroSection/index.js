import React /*{ useState }*/ from "react";
import StashBackground from "../../assets/img/StashdropsPodio.jpg";
//import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  //HeroBtnWrapper,
  //ArrowForward,
  //ArrowRight
} from "./HeroElements";

const HeroSection = () => {
  /* const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };*/

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg
          src={StashBackground}
          // style={{ width: "100%", height: "100%" }}
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Que tu bienestar sea tu mejor hábito</HeroH1>
        <HeroP>
          Creado con tintes exclusivamente terapeuticos, nuestro aceite es
          elaborado a base de extractos altos en cbd. Buscando asi mejorar la
          calidad de vida de sus usuarios.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
