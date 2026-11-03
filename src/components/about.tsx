import React from 'react'

class aboutClassComponent extends React.Component{
   constructor(props){
      super(props)
      console.log(props)
   }
   componentDidMount(){
      console.log('mouted')
   }
   render(){
      return (<><div>this is about us classss page</div></>)
   }
}

export default aboutClassComponent;