# invictus

``` import { useEffect, useState } from "react";```
imported hooks to be used

```  let [sortedhash, set] = useState([]);
  let [n, setn] = useState(0);
  let [t, sett] = useState(0);
  const res = sortedhash.slice(0, t); 
  ```

sortedhash contains array of manipulated data that coming from the provided api
variable "n" is used to refer to the value in the input tag
and "t" is used to set the number of words to be printed upon clicking submit button
"res" contains the sliced data from sortedhash array.

```
useEffect(() => {
    fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md")
      .then((res) => {
        return res.body.getReader();
      }) 
 ```

we are using useEffect hook to fetch content and then we return the reader
 

```
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
```

reader.read() returns a promise and value of data is then decoded to a string
after which the whole process is to read each word and store it's frequency.
The object is then sorted in decreasing order of frequency.
The dependency array is left empty to let this effect run only once.

```<input value={n} onChange={(e) => setn(e.target.value)}></input> ```

here i used usestate which helps in referring to the value of n globally

``` <button onClick={() => sett(n)}>submit</button> ```
**this will manipulate the data to get the required output in "res" after rerender **


Created with CodeSandbox
