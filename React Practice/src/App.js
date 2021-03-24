import "./styles.css";
import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);
  let [toastState, setToastState] = useState("none");
  let [countChar, setCountChar] = useState("");
  let [darkmode, setDarkmode] = useState("off");
  const [size, setSize] = useState(16);
  let [userInput, setUserInput] = useState("");
  let [font, setFont] = useState("Times New Roman");
  let groceryItems = [
    "Eggs",
    "Bread",
    "Milk",
    "Almonds",
    "Cashew",
    "Baking Powder"
  ];
  let [simpleWishlist, setSimpleWishlist] = useState([]);
  let [passwords, setPasswords] = useState({
    password1: "",
    password2: ""
  });
  let [alphaPass, setAlphaPass] = useState("");
  let [pass4btn, setPass4btn] = useState({
    password1: "",
    password2: ""
  });
  let [passVisible, setPassVisible] = useState({
    text: "Show",
    state: "password"
  });
  let [tabName, setTabName] = useState("Home");
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState({});
  const [todo, setTodo] = useState("");
  const [likedList, setLikedList] = useState({
    Apple: { status: "Like" },
    Banana: { status: "Like" },
    Orange: { status: "Like" }
  });

  // --------------------------Helper Functiions----------------------------

  function remainingCharacters() {
    /* This function will utilize state variable countChar.
       It will return the remaining character limit
    */

    return 60 - countChar.length;
  }

  function passwordMatchedorNot() {
    /* This function will utilize state variable passwords.
       It will check whether the two value of two keys in it is equal or not. 
    */

    if (passwords.password1.length === 0 || passwords.password2.length === 0) {
      return <p>Password field is Empty</p>;
    } else if (passwords.password1 === passwords.password2) {
      return <div>Password Match</div>;
    }
    return <div>Password Unmatched</div>;
  }

  function alphanumeric() {
    /*  This function will utilize state variable alphaPass.
        It will apply certain pattern over the variable 
    */

    const patternOne = new RegExp(/[a-zA-Z]/);
    const patternSecond = new RegExp(/[0-9]/);
    const patternThird = new RegExp(/[@_!#$%^&*()<>?/|}{~:^]/);
    if (
      patternOne.test(alphaPass) &&
      patternSecond.test(alphaPass) &&
      !patternThird.test(alphaPass)
    ) {
      return "Password is AlphaNumeric";
    } else {
      return "Password is not Alphanumeric";
    }
  }

  function disableButton() {
    /*  This function will utilize state varable pass4btn. 
        If password matched then button will be enables otherwise not
    */
    if (pass4btn.password1.length === 0 || pass4btn.password2.length === 0) {
      return (
        <button type="button" disabled>
          Submit
        </button>
      );
    } else if (pass4btn.password1 === pass4btn.password2) {
      return <button type="button">Submit</button>;
    }
    return (
      <button type="button" disabled>
        Submit
      </button>
    );
  }

  function show_hide_passsword() {
    /* This function will utilize state variable  passVisible. 
       It will toggle each key-value pair present in object.
    */

    if (passVisible.text === "Show") {
      setPassVisible({
        text: "Hide",
        state: "text"
      });
    } else {
      setPassVisible({
        text: "Show",
        state: "password"
      });
    }
  }

  function toggleNav() {
    if (tabName === "Home") {
      return <p>Home</p>;
    } else if (tabName === "About") {
      return <p>About</p>;
    } else {
      return <p>Contact Number</p>;
    }
  }

  function DealWithToast() {
    if (toastState === "none") {
      return (
        <div>
          <h1>To view toast click on the button below</h1>
          <button onClick={() => setToastState("visible")}>View Toast</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>To hide the toast click on the button below</h1>
          <button onClick={() => setToastState("none")}>Hide Toast</button>
        </div>
      );
    }
  }
  function DealWithDarkMode() {
    if (darkmode === "off") {
      return (
        <div>
          <h1>This is normal Mode</h1>
          <button onClick={() => setDarkmode("on")}>Enable Dark Mode</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1
            style={{
              color: "white",
              backgroundColor: "black"
            }}
          >
            This is Dark Mode
          </h1>
          <button onClick={() => setDarkmode("off")}>Disable Dark Mode</button>
        </div>
      );
    }
  }

  function ChangeFontnSize() {
    return (
      <div
        style={{
          border: "1px solid",
          margin: "1rem",
          minHeight: "4rem",
          fontSize: String(size) + "px",
          fontFamily: String(font)
        }}
      >
        {userInput}
      </div>
    );
  }
  function DisplayCode() {
    return (
      <div
        style={{
          backgroundColor: "black",
          border: "1px solid black",
          minHeight: "70px",
          color: "yellow",
          margin: "0 auto 1rem auto",
          maxWidth: "270px",
          position: "relative"
        }}
      >
        <span id="Code">
          font-size:{size}px; font-family:{font}
        </span>
      </div>
    );
  }
  function onClickHandler() {
    setInput("");
    if (items.length === 0) {
      cart.push({ id: 0, name: input, quan: 1 });
      setCart(cart);

      setItems([...items, input]);
    } else if (!items.includes(input)) {
      setItems([...items, input]);
      setCart([...cart, { id: cart.length, name: input, quan: 1 }]);
    } else if (items.includes(input)) {
      const newCart = cart.map((item) => {
        if (item.name === input) {
          return { id: item.id, name: item.name, quan: item.quan + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Assignment Solution Day 1</h1>
      </div>
      <div className="Solutions">
        {/* Counter */}
        <div>
          <h2>A Simple Counter</h2>
          <button onClick={() => setCounter(counter + 1)}> + </button>
          <button onClick={() => setCounter(counter - 1)}> - </button>
          {counter}
        </div>
      </div>

      {/* Character Counter like Twitter */}
      <div>
        <h2>Character Counter like Twitter</h2>
        <textarea
          onChange={(event) => setCountChar((countChar = event.target.value))}
        ></textarea>
        {remainingCharacters()}
      </div>

      {/* Password Matching  */}
      <div>
        <h2>Password Matching</h2>
        <input
          onChange={(event) =>
            setPasswords((passwords) => ({
              ...passwords,
              password1: event.target.value
            }))
          }
          placeholder="Enter your password"
        ></input>
        <input
          onChange={(event) =>
            setPasswords((passwords) => ({
              ...passwords,
              password2: event.target.value
            }))
          }
          placeholder="Re-enter your password"
        ></input>
        {passwordMatchedorNot()}
      </div>

      {/* Alphanumeric Password */}
      <div>
        <h2>Alphanumeric password</h2>
        <input
          type="password"
          onChange={(event) => setAlphaPass((alphaPass = event.target.value))}
        ></input>
        {alphanumeric()}
      </div>

      {/* Disable button */}
      <div>
        <h2>Disable Submit </h2>
        <input
          type="password"
          onChange={(event) =>
            setPass4btn((pass4btn) => ({
              ...pass4btn,
              password1: event.target.value
            }))
          }
        ></input>
        <input
          type="password"
          onChange={(event) =>
            setPass4btn((pass4btn) => ({
              ...pass4btn,
              password2: event.target.value
            }))
          }
        ></input>
        {disableButton()}
      </div>

      {/* Show Password */}
      <div>
        <h2>Show Password</h2>
        <input type={passVisible.state}></input>
        <button onClick={show_hide_passsword}>{passVisible.text}</button>
      </div>

      {/* Simple Add to Cart  */}
      <div>
        <h2>Simple Add to Cart</h2>
        {groceryItems.map((item) => (
          <li
            className="inline-list"
            onClick={() => setSimpleWishlist([...simpleWishlist, item])}
          >
            {item}
          </li>
        ))}
        <h3>Simple Wishlist</h3>
        {simpleWishlist.map((item) => (
          <li className="block-list">{item}</li>
        ))}
      </div>
      {/* Switch Tabs */}
      <div style={{ marginTop: "3rem" }}>
        <button onClick={() => setTabName("Home")}>Home</button>
        <button onClick={() => setTabName("About")}>About</button>
        <button onClick={() => setTabName("Contact Number")}>
          Contact Number
        </button>
        {toggleNav()}
      </div>

      {/* Toast */}
      <div>
        <h1>Toast</h1>
        <DealWithToast />
      </div>

      {/* Dark Mode */}
      <DealWithDarkMode />

      <h1>Designer Tool Figma</h1>
      <button
        onClick={() => {
          if (size === 16) {
            alert("Cant go smaller than this");
            setSize(16);
          } else {
            setSize(size - 8);
          }
        }}
      >
        {" "}
        -{" "}
      </button>
      <textarea
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      ></textarea>
      <button onClick={() => setSize(size + 8)}> + </button>
      {/* Color Options */}
      <div>
        <h3>Select font</h3>
        <select
          onChange={(event) => {
            setFont(event.target.value);
          }}
        >
          <option>Times New Roman</option>
          <option>cursive</option>
          <option>monaco</option>
          <option>courier New</option>
          <option>papyrus</option>
        </select>
      </div>
      <ChangeFontnSize />
      <DisplayCode />
      <div>
        <h1>Advance add to cart</h1>
        <input
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter your item"
          value={input}
        ></input>
        <button onClick={input !== "" ? onClickHandler : null}>
          Add to cart
        </button>
        <h1>Your Cart</h1>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.quan === 1 ? "" : item.quan}
          </li>
        ))}
      </div>
      <div>
        <h1>Todos</h1>
        <input
          onChange={(event) => setTodo(event.target.value)}
          placeholder="Enter your todos"
          value={todo}
        ></input>
        <button
          onClick={() => {
            if (todo !== "" && todos.todo === undefined) {
              setTodos({ ...todos, [todo]: { checked: false } });
            }
          }}
        >
          Add
        </button>
        {Object.keys(todos).map((item) => (
          <li
            onClick={() => {
              setTodos({
                ...todos,
                [item]: { checked: todos[item].checked === true ? false : true }
              });
            }}
            key={item}
          >
            {todos[item].checked === true ? <s>{item}</s> : item}
          </li>
        ))}
      </div>
      <div>
        <h1>Like</h1>
        {Object.keys(likedList).map((item) => (
          <li>
            {item}{" "}
            <button
              onClick={() => {
                setLikedList({
                  ...likedList,
                  [item]: {
                    status:
                      likedList[item].status === "Liked" ? "Like" : "Liked"
                  }
                });
              }}
            >
              {likedList[item].status}
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
export default App;
