// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript Starter</h1>
  <p>In typescript we have 3 access modifiers:<p>
  <p>1. public =>  By default all members of a class are public i.e, unrestricted </p>
  <p>2. private  =>  restrict access to variable </p>
  <p>3. protected</p>
`;

//Lets create a new object with two points co-ordinates (x, y)


class Point {
  x: any;
  // private x: number; //this would restrict 'x' from being re-assigned as in line 85
  y: any;

  constructor(x?: number, y?: number){
    this.x = x;
    this.y = y;
  }

  draw(){
    console.log('X: ' + this.x + ', ' + 'Y: ' + this.y)
  }
}
let point = new Point(1, 2);
//let's change one of the co-ordinate
point.x = 3; //notice here that we just changed the initial value of "x" from 1 to 3
              //to restrict a change to line 79, we should use access modifiers
              //if we assign 'private to the 'x' in the class it would generate an error for line 85