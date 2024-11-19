import { houseService } from "../services/HouseService"
import BaseController from "../utils/BaseController"

export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/:houseId', this.getHouseById)
    }

    async getHouses(request, response, next) {
        try {
            const houseQuery = request.query
            const houses = await houseService.getHouse(houseQuery)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async getHouseById(request, response, next) {
        try {
            const houseId = request.params.houseId
            const house = await houseService.getHouseById(houseId)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }

}
