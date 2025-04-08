export interface IPackagesEntity {
    data: Packages[]
    message: string
    status: number
  }
  
  export interface Packages {
    id: number
    name: string
    services: Service[]
    price: number
  }
  
  export interface Service {
    id: number
    name: string
    description: string
    price: number
  }