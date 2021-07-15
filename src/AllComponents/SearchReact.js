import React, {Component} from 'react';
import styled from 'styled-components';
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
export default SearchReact;