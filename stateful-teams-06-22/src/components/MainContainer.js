import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import DefaultTeam from "./DefaultTeam";

export default function MainContainer({ students }) {
  return (
    <>
      <FrontEnd />
      <DefaultTeam students={students} />
      <BackEnd />
    </>
  );
}
