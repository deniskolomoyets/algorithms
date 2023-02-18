//Point.js
// Реализуйте метод toString(), который преобразует точку к строке в соответствии с примером ниже (1, 10)
// const point1 = new Point(1, 10);
// console.log(point1.toString()); // => (1, 10)
//
// Segment.js
// Реализуйте метод toString(), который преобразует отрезок к строке в соответствии с примером ниже [(1, 10)]
// const point1 = new Point(1, 10);
// const point2 = new Point(11, -3);
// const segment1 = new Segment(point1, point2);
// console.log(segment1.toString()); // => [(1, 10), (11, -3)]
// const segment2 = new Segment(point2, point1);
// console.log(segment2.toString()); // => [(11, -3), (1, 10)]

// BEGIN (write your solution here)
function getX() {
    return this.x;
  }
 
  function getY() {
    return this.y;
  }
 
  function Point(x, y) {
    this.x = x;
    this.y = y;
    this.getX = getX;
    this.getY = getY;
  }
 // END
 export default Point;


 function getBeginPoint() {
    return this.beginPoint;
  }
  function getEndPoint() {
    return this.endPoint;
  }
  
  function Segment (beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
  }
  // END
  export default Segment;

  import Point from './Point.js';
  import Segment from './Segment.js';
  
  // BEGIN (write your solution here)
  const reverse = (segment) => {
    const oldBeginPoint = segment.getBeginPoint();
    const oldEndPoint = segment.getEndPoint();
    const newBeginPoint = new Point(oldEndPoint.getX(), oldEndPoint.getY());
    const newEndPoint = new Point(oldBeginPoint.getX(), oldBeginPoint.getY());
    return new Segment(newBeginPoint, newEndPoint);
  }
  export default reverse;
  // END
