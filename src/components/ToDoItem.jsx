import React from "react";

function ToDOItem(props) {
  // const [isDone, setDone] = useState(false);

  // function handelDone() {
  //   setDone(!isDone);
  // }
  return (
    <div>
      <li
        onClick={() => {
          props.onCheck(props.id);
        }}
        // onCheck = {props.Checked}
        // style={{ textDecoration: isDone && "line-through" }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDOItem;
