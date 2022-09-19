export class Asteroid {
    public id: number;
    public name: string;
    public absoluteMagnitudeH: number;
    public minimumEstimatedDiameterKilometers: number;
    public maximumEstimatedDiameterKilometers: number;
    public isPotentiallyHazardousAsteroid: boolean;
    public lastTimeWasNearEarthDate: string | null;
    public lastTimeWasNearEarthDistance: number | null;
    public nextTimeWillBeNearEarthDate: string | null;
    public nextTimeWillBeNearEarthDistance: number | null;

    constructor(
        id: number,
        name: string,
        absoluteMagnitudeH: number,
        minimumEstimatedDiameterKilometers: number,
        maximumEstimatedDiameterKilometers: number,
        isPotentiallyHazardousAsteroid: boolean,
        lastTimeWasNearEarthDate: string | null,
        lastTimeWasNearEarthDistance: number | null,
        nextTimeWillBeNearEarthDate: string | null,
        nextTimeWillBeNearEarthDistance: number | null
    ) {
        this.id = id;
        this.name = name;
        this.absoluteMagnitudeH = absoluteMagnitudeH;
        this.minimumEstimatedDiameterKilometers = minimumEstimatedDiameterKilometers;
        this.maximumEstimatedDiameterKilometers = maximumEstimatedDiameterKilometers;
        this.isPotentiallyHazardousAsteroid = isPotentiallyHazardousAsteroid;
        this.lastTimeWasNearEarthDate = lastTimeWasNearEarthDate;
        this.lastTimeWasNearEarthDistance = lastTimeWasNearEarthDistance;
        this.nextTimeWillBeNearEarthDate = nextTimeWillBeNearEarthDate;
        this.nextTimeWillBeNearEarthDistance = nextTimeWillBeNearEarthDistance
    }
}
