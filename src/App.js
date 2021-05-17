import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  let [sortedhash, set] = useState([]);
  let [n, setn] = useState(0);
  let [t, sett] = useState(0);
  const res = sortedhash.slice(0, t);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md")
      .then((res) => {
        return res.body.getReader();
      })
      .then((res) => {
        res.read().then((data, flag) => {
          var str = String.fromCharCode.apply(null, data.value);
          let temp = "",
            hash = {};
          for (let i = 0; i < str.length; i++) {
            if (
              (str[i] >= "a" && str[i] <= "z") ||
              (str[i] >= "A" && str[i] <= "Z")
            ) {
              temp += str[i];
            } else if (temp !== "") {
              if (hash[temp]) {
                hash[temp]++;
              } else {
                hash[temp] = 1;
              }
              temp = "";
            }
          }
          if (temp !== "") {
            if (hash[temp]) hash[temp]++;
            else hash[temp] = 1;
          }
          let sortedhash = Object.entries(hash).sort((a, b) => b[1] - a[1]);
          set(sortedhash);
        });
      });
  }, []);
  return (
    <div className="App">
      <h1>
        <input value={n} onChange={(e) => setn(e.target.value)}></input>
      </h1>
      <button onClick={() => sett(n)}>submit</button>
      <br />
      {res.map((a) => {
        return (
          <>
            {a[0]} {a[1]} <br />
          </>
        );
      })}
    </div>
  );
}
