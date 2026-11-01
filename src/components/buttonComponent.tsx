import {useState} from 'react';

interface ButtonProps {
    text:string
    onClick: () => void
}

export default function ButtonComponent({ text , onClick }: ButtonProps){
const [filter, setFilter] = useState<Filtertext>();
    return (
        <>
        <button className="generic-button" onClick={onClick}>{text}</button>
        </>
    )
}