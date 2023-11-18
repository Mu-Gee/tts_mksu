import { Fragment } from "react"; //we can use this or not import and leave the tags empty
function ListGroup() {
  let items = [
    //if you want to declare list dynamically declare a const of arrays
    "New York",
    "London",
    "Tokyo",
    "Delhi",
    "Paris",
  ];
  //render items dynamically
  //   items = [];

  return (
    //if condition can't be allowed here so we use an alternative
    <Fragment>
      <h1>List Group</h1>
      {/* {items.length === 0 ?<p>No items found</p> : null}; */}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item,index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment> //acomponent can't return more than 1 elements.To solve this select all open commmand pallete wrap with abbreviation then put the element you want to wrap withthen press enter
    //wrap the items.map in curly braces to render it dynamically
    //we cannot write an if statement inside the jsx file it only accepts html elements
  );
}
export default ListGroup;
