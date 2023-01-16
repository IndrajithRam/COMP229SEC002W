class vehicle
{
    constructor (wheels)
    {
        this.wheels=wheels;
    }
    toString()
    {
        return '('+this.wheels+')';
    }
}

class car extends vehicle
{
    constructor (colour)
    {
        super(4);
        this.colour=colour;

    }
    toString()
    {
        return super.toString()+'coloured'+this.colour;
    }
}

let Car=new car('blue');
Car.toString();

console.log(Car instanceof car);
console.log(Car instanceof vehicle);
console.log(Car.colour);