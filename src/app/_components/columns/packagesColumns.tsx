'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CustomDropdown } from '../shared/dropdown-menu';
import { ActionsColumnsProps } from '@/infrastructure/interfaces/global.interface';
import { FormatHelper } from '@/config/helpers';
import { Packages } from '@/core/entities/package.entity';

export const getPackagesColumns = ({
    handleDelete: handleDeleteDoctor,
    handleEdit: handleEditDoctor,
}: ActionsColumnsProps): ColumnDef<Packages>[] => [
        {
            accessorKey: 'id',
            header: 'ID paquete',
            cell: ({ getValue }) => {
                const value = getValue<string>();
                return `#${value}`;
            },
        },
        {
            accessorKey: 'name',
            header: 'Nombre paquete',
            cell: ({ row }) => {
                const { name } = row.original
                return name
            },
        },
        


        {
            accessorKey: 'price',
            header: 'Precio total',
            cell: ({ row }) => {
                const { price } = row.original
                return FormatHelper.currency(price)
            },
        },


        {
            id: 'actions',
            cell: ({ row }) => {
                const { original } = row;
                return (
                    <CustomDropdown
                        handleEdit={() =>
                            handleEditDoctor({
                                entityType: 'paquetes',
                                type: 'editar',
                                data: original,
                            })
                        }
                        handleDelete={() => handleDeleteDoctor(original.id)}
                    />
                );
            },
        },
    ];
