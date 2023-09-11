class Factory{
    constructor(location, owner){

        this.location = location
        this.owner = owner
    }
    createVehicle(){
        super(vehicle)
        return this.vehicle + " " + "vehicle"
    }
    listVehicles(){
        return this.Factory + " " + "drives"
    }
    paintVehicle(){
        return this.vin + " " + "vin"
        return this.paint + " " + "paint"
    }
}