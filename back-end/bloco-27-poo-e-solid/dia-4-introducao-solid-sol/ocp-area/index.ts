import Circle from './Circle';
import Rectangle from './Rectangle';
import TotalArea from './TotalArea';

const circle = new Circle(2);
const rectangle = new Rectangle(2, 3);

// console.log(circle.area);
// console.log(rectangle.area);

const area = new TotalArea([circle, rectangle]);

console.log(`Área total: ${area.totalArea}m²`);