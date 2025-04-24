import { useTodo } from "../Contexts/TodoApp";
import Container from "./Container";

function Hero() {
  const { isDarkMode } = useTodo();

  return (
    <div
      className={`${
        isDarkMode
          ? " bg-[url(/images/bg-mobile-dark.jpg)] md:bg-[url(/images/bg-desktop-dark.jpg)] max-w-[100%]    bg-cover bg-no-repeat "
          : " bg-[url(/images/bg-mobile-light.jpg)] md:bg-[url(/images/bg-desktop-light.jpg)] max-w-[100%]    bg-cover bg-no-repeat "
      }`}
    >
      <div className=" max-w-[80%] lg:max-w-[30%] py-[6rem] m-auto">
        <Container />
      </div>
    </div>
  );
}

export default Hero;
