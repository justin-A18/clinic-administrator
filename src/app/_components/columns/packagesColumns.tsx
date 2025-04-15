'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CustomDropdown } from '../shared/dropdown-menu';
import { ActionsColumnsProps } from '@/infrastructure/interfaces/global.interface';
import { FormatHelper } from '@/config/helpers';
import { Packages } from '@/core/entities/package.entity';

export const getPackagesColumns = ({
    handleDelete: handleDeletePackage,
    handleEdit: handleEditPackage,
}: ActionsColumnsProps): ColumnDef<Packages>[] => [
        {
            accessorKey: 'id',
            header: 'ID paquete',
            cell: ({ getValue }) => {
                const value = getValue<string>();
                return  value === undefined ? "sin datos" : `#${value}` ;
            },
        },
        {
            accessorKey: 'name',
            header: 'Nombre paquete',
            cell: ({ row }) => {
                const { name } = row.original
                return name === undefined ? "sin datos" : name
            },
        },
        


        {
            accessorKey: 'price',
            header: 'Precio total',
            cell: ({ row }) => {
                const { price } = row.original
                return price === undefined ? "sin datos" : FormatHelper.currency(price)
            },
        },
        {
            id: 'actions',
            cell: ({ row }) => {
                const { original } = row;
                return (
                    <CustomDropdown
                    handleEdit={() =>
                        handleEditPackage({
                            entityType: 'paquetes',
                            type: 'editar',
                            data: original,
                        })
                    }
                    handleDelete={() => handleDeletePackage(original.id)}
                    />
                );
            },
        },
    ];
