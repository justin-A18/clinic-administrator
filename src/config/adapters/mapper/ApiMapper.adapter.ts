import { IServiceEntity } from "@/core/entities"
import { ServiceEntityMapper } from "./mapperpattern.adapter"

export const ApiMapper = (arraymap: IServiceEntity) => {
    const response = ServiceEntityMapper.mapArray(arraymap)
    return response
}