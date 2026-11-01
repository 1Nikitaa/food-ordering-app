interface InputProps {
    text: string;
    searchItem: (value:string) => void;
}

export default function Searchbox({text,searchItem}:InputProps){
    return ( 
        <>
        <input onChange={event=>searchItem(event?.target.value)} placeholder={text}></input>
        </>
    );
}