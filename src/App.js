import React, {Component,useEffect,useState} from 'react';
import { ApolloClient,InMemoryCache,
ApolloProvider,
useQuery,
gql } from '@apollo/client';

import { render } from '@testing-library/react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { formatError } from 'graphql';

import styled from 'styled-components';

 const EXCHANGE_RATES = gql`
   query FetchingGit{
       avatar_url
       repos_url
       login
   }
 `;
function App() {
  React.useEffect(()=>{
    //fetch('https://api.github.com/users/aditiaggarwal28'
    

    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     query: 
    //     
        
    //   }
    //   }
    //       `,
    //   }),
    // }
  //  )
  // .then((res) => res.json())
  // .then((result) => console.log(result));  },[])
  const {loading,data,error}=useQuery(EXCHANGE_RATES);
  console.log(loading);
  return (
    <div className="App">
    </div>
  );
}

const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const Form=styled.form`
background-color:  #3CBC8D;
`;

const Button=styled.button`
background: coral;
color: blue;

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;
function SearchReact(){
  return (<> 
  <Form inline id="my-form">
      {console.log("hello")}
  <Input class="form-group" id="searchbar" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-success" class="form-group">Search</Button>
</Form>
</>
  )
}
function App(){
  useEffect
  var Form= document.getElementById('my-form');
  var search;
  Form.addEventListener('submit',function(e){
  e.preventDefault();
  search=document.getElementById('searchbar').value;
  })
  const url =`https://api.github.com/users/${search}`
  const [product,setProduct]=useState(null);
  let content="No User Exist with this name";
  useEffect(()=>{
    axios.get(url).then(response=>{setProduct(response.data)
  })
},[search])
if(product){
  content=
  <div>
    <h1>{product.login}</h1>
    <img src={product.avatar_url} alt={product.login}/>
  </div>
}
return(
  <div>
    {console.log("Aditi")}
  {content}
  </div>
)

}

export default App;
