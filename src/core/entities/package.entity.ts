export interface IPackagesEntity {
    data: Packages[]
    message: string
    status: number
  }
  
  export interface Packages {
    id: string
    name: string
    services: Service[]
    price: number
  }
  
  export interface Service {
    id: string
    name: string
    description: string
    price: number
  }