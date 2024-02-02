import React from 'react';
import ReactDom from 'react-dom';   


import "./index.css"

const books =[ 
    {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL300_SR300,200_.jpg',
    title: 'I love you to the Moon and Back',
    author:'Amelia Hepworth'

    },
    {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81LZXcfKqJL._AC_UL300_SR300,200_.jpg',
    title: 'Llama Llama I Love You',
    author:'Anna Dewdney'

   }
];

const names = ['john','peter','susan'];
const newNames = names.map((names)=>{
    return <h1>{names}</h1>
})

function BookList() {
    return (
       <section className='booklist'>{newNames}
        </section>
    );  
}


const Book = (props) => {
  const {img, title, author} = props;
    return (
        <article className='book'>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>  
        </article>
    )
};

ReactDom.render(<BookList/>, document.getElementById('root'));

