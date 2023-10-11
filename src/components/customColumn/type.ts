import { CustomColItem } from '@/types';
import React from 'react'

export interface CustomColumnProps {
    args: any;
    setArgs: React.Dispatch<React.SetStateAction<any>>
    Col: Array<CustomColItem>
}