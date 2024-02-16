function ArrowFunctions(){
const subtract = (a: number, b: number) => a - b 
//Dont neeed touse brackets and return but if your debugging, you cant put a breakpoint within lambda
  const threeMinusOne = subtract(3, 1);
  console.log(threeMinusOne);

  return (
   <>
    <h3>New ES6 arrow functions</h3>
    threeMinusOne = {threeMinusOne}<br />
    subtract(3, 1) = {subtract(3, 1)}<br />
   </>
  )}
  export default ArrowFunctions;
