import React from 'react'
import { Input } from 'reactstrap'

export default function SearchBar({className}) {
    return (
        <div className={className}>
            <Input type="text" placeholder="Search" className="search_input" />
        </div>
    )
}
