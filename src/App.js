import "./styles.css";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md")
      .then((res) => {
        return res.body.getReader();
      })
      .then((res) => {
        res.read().then((data, flag) => {
          var str = String.fromCharCode.apply(null, data.value);
          //  console.log(str.split('.').join(' ').split(',').join(' ').split(';').join(' ').split('-').join(' ').split(' '));
          console.log(
            str
              .split(" ")
              .join(".")
              .split(".")
              .filter((s) => {
                return s.length >= 1;
              })
              .map((s) => {
                let c = s[s.length - 1];
                return c === "," || c === ";" || c === "-"
                  ? s.slice(0, s.length - 1)
                  : s;
              })
          );
          console.log(str);
        });
      });
  });
  return (
    <div className="App">
      <h1>
        <input></input>
      </h1>
      <button>submit</button>
    </div>
  );
}
