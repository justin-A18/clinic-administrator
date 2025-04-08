import { IServiceEntity, IServiceMappper } from "@/core/entities";

export const ServiceEntityMapper = {
    map: (apiService: IServiceEntity): IServiceMappper => ({
        value: apiService.id,
        label: apiService.name,
        disable: false
    }),

    mapArray: (apiServices: IServiceEntity[] = []): IServiceMappper[] =>
        apiServices.map(ServiceEntityMapper.map),
};


