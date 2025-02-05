import React from 'react'
import down from '../../../../assets/down.svg'
import up from '../../../../assets/up.svg'
import upDown from '../../../../assets/up-down.svg'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = upDown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    debugger
    if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    }
    return down // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                width={20}
                alt={'sort icon'}
                style={{display: 'block', boxSizing: 'border-box'}}
            />
        </span>
    )
}

export default SuperSort
