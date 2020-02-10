const square = 
{
	area : (a) => (a*a),
	perimeter : (a) => (4*a)
}
const calculate = (a) =>
{
	console.log(`The Area of Square is `+square.area(a));
	console.log(`The Perimeter of Square is `+square.perimeter(a));
}

calculate(9);