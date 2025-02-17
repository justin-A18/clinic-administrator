"use client"
import { DoctorsGetUseCase } from "@/core/use-cases/auth";
import { useQuery } from "@tanstack/react-query";

export const UseQueryDoctorsGet = useQuery({
    queryKey: ['doctors'],
    queryFn: DoctorsGetUseCase
})