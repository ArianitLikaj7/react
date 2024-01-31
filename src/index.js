import React from 'react';
import ReactDom from 'react-dom';   

// function Greeting(){
//     return <div>
//              <h1>
//                  Hello World, Welcome in the world of React
//               </h1>
//         </div>;
//     return  
 
 //}

// const Greeting = ()=> {
//     return React.createElement('div',{},React.createElement('h1',{},"Hellooo"));
// }

import "./index.css"
function BookList() {
    return (
       <section className='booklist'>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        
        </section>
    );  
}

const Book = () => {
    return (
        <article className='book'>
            <Image></Image>
            <Title />
            <Author />
        </article>
   
    )
};

const Image = ()=> <img src="https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL300_SR300,200_.jpg" alt="" />;
const Title = ()=> <h1>I love you to the Moon and Back</h1>;
const Author = ()=> <h4>Amelia Hepworth</h4>;
ReactDom.render(<BookList/>, document.getElementById('root'));

