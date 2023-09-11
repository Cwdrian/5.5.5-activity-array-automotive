class Vehicle{

    constructor(make, model, color, price, vin,){
        this.make = make
        this.model = model
        this.color = color
        this.price = price
        this.vin = vin
    
    }
    paint(paintColor) {
            this.paint = paintColor;
}
    drive(){
        return this.vehicle + " " + "drives"
    }
    }