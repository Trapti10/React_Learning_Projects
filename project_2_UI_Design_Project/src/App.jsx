import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'


const App = () => {

  const users  =[
    {
      img : 'https://i.pinimg.com/736x/6c/59/d4/6c59d4a19ec9c56dca683967ad279c09.jpg',
      intro:'    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, officiis nulla. Sint, cum ducimus. Eos dolorum repellendus voluptatem asperiores eni',
      tag:'Satisfied',
      color:'orange'
    },
    {
      img : 'https://i.pinimg.com/736x/c5/3d/87/c53d874b4d7662ace85677f754e7840e.jpg',
      intro:'    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, officiis nulla. Sint, cum ducimus. Eos dolorum repellendus voluptatem asperiores eni',
      tag:'Underserved',
      color:'royalblue'
    },
    {
      img : 'https://i.pinimg.com/736x/5a/c0/b5/5ac0b511ef3e4df108c869b2c55e52fe.jpg',
      intro:'    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, officiis nulla. Sint, cum ducimus. Eos dolorum repellendus voluptatem asperiores eni',
      tag:'Underbanked',
      color:'gray'
    },
    {
      img : 'https://i.pinimg.com/736x/86/25/ad/8625ada353525b0604e10efdb8631609.jpg',
      intro:'    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, officiis nulla. Sint, cum ducimus. Eos dolorum repellendus voluptatem asperiores eni',
      tag:'Underserved',
      color:'blue'
    },
    {
      img : 'https://i.pinimg.com/1200x/be/b4/98/beb49882f9a18b19d73e9f1ecac6b622.jpg',
      intro:'    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, officiis nulla. Sint, cum ducimus. Eos dolorum repellendus voluptatem asperiores eni',
      tag:'Satisfied',
      color:'lightseagreen'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App