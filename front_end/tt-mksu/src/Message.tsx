//PascalCasing-react uses this
function Message(//declaring function called Message
    ){
//describe how the UI is gonna look like
//use JSX-JavaScript XML
const name ='';//set name to constant
if(name)
return <h1>Hello {name} </h1>;//It is going to be compiled down to javascript
//add name dynamically
return <h1>Hello World</h1>;//otherwise return this
}
export default Message; //to use this we need to export it as a default object from this module
