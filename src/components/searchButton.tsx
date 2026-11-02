import React from 'react'
interface InputProps {
    text: string;
    searchItem: (value:string) => void;
}

// export default function Searchbox({text,searchItem}:InputProps){
//     return ( 
//         <>
//         <input onChange={event=>searchItem(event?.target.value)} placeholder={text}></input>
//         </>
//     );
// }

 class Searchbox extends React.Component<InputProps>{
    constructor(props :InputProps){
        super(props)
        console.log(props)
      this.state={
        count:0
      }
    }
    render(){

        return(
            <>
            <button onClick={()=>
                this.setState({
                    count: this.state.count +1
                })
                
            }>{this.state.count}</button>
            <input onChange={event=>this.props.searchItem(event?.target.value)} placeholder={this.props.text}></input>
            </>
        )
    }

 }
 export default Searchbox;
