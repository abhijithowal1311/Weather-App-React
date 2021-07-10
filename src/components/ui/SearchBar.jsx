import React from 'react'
import { Input } from 'reactstrap'
import AutoSuggestInput from '../utils/AutoSuggestInput';

export default function SearchBar({className}) {
    return (
        <div className={className}>
            <AutoSuggestInput />
        </div>
    )
}
