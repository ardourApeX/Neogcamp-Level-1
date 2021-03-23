import "./styles.css";
const ls = [
  { id: 1, task: "something" },
  { id: 2, task: "something new" },
  { id: 3, task: "something else" }
];
export default function App() {
  return (
    <div className="App">
      <button onClick={(event) => console.log(event.target.innerText)}>
        Joys Button
      </button>
      {ls.map((item) => (
        <li onClick={() => console.log(item)} key={item.id}>
          {item.task}
        </li>
      ))}
    </div>
  );
}
