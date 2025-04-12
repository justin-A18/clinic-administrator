import { IServiceEntity} from "@/core/entities";

export const ServiceEntityMapper = {
    map: (apiService: IServiceEntity) => ({
        value: apiService.id,
        label: apiService.name,
        disable: false
    }),

    mapArray: (apiServices: IServiceEntity[] = []) =>
        apiServices.map(ServiceEntityMapper.map),
};


