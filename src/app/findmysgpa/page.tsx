import Loading from "../loading";
import { spectral } from "../fonts";
import "../../styles/background.css";
function FindMySGPA() {
  const grades = ["S", "A+", "A", "A-", "B+", "B", "C", "D", "E", "F"];
  const randomGrade = () => {
    return grades[Math.floor(Math.random() * 10)];
  };

  const renderListitems = () => {
    const listItems = [];
    for (let i = 0; i < 10; i++) {
      listItems.push(
        <li key={i} className="-z-{1} absolute -bottom-40 block text-sky-100">
          {randomGrade()}
        </li>,
      );
    }
    return listItems;
  };
  return (
    <>
      <div className="-z-{1} absolute h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-600 via-indigo-800 to-gray-900">
        <ul className="circles -z-{1} absolute left-0 top-0 h-full w-full overflow-hidden ">
          {renderListitems()}
        </ul>
      </div>
    </>
  );
}
export default FindMySGPA;
