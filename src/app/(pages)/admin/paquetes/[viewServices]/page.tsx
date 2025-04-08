import { useModalStore } from '@/app/_providers/store'
import React from 'react'


interface DataId {
    viewServices: number
}
export const page = ({ prop }: { prop: DataId }) => {
    const { data, closeModal } = useModalStore()

    // useGet
    console.log(prop.viewServices)




    return (
        <div>page</div>
    )
}
