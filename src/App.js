import React from 'react'
import Content from './Components/Pages/Content/Content'
import ImageContext from './Components/Context/ImageContext'
import { useState } from 'react';

function App() {
  const [logo] = useState('./Assets/Logo.png');
  const [htmllogo] = useState(require('./Assets/html.png'));
  const [csslogo] = useState(require('./Assets/css.png'));
  const [jslogo] = useState(require('./Assets/js.png'));
  const [reactlogo] = useState(require('./Assets/react.png'));
  const [tailwindlogo] = useState(require('./Assets/Tailwind.png'));
  const [gsapanimationlogo] = useState(require('./Assets/Gsap.png'));
  const [pythonlogo] = useState(require('./Assets/py.png'));
  const [canvalogo] = useState(require('./Assets/canva.png'));
  const [certificate1] = useState(require('./Assets/Blockchain Basics.jpg'));
  const [certificate2] = useState(require('./Assets/Foundations of User Experience (UX) Design.jpg'));
  const [certificate3] = useState(require('./Assets/Front End Development - HTML.jpg'));
  const [certificate4] = useState(require('./Assets/HTML and CSS in depth.jpg'));
  const [certificate5] = useState(require('./Assets/Machine Learning Onramp.jpg'));
  const [certificate6] = useState(require('./Assets/MATLAB Onramp.jpg'));
  const [certificate7] = useState(require('./Assets/React Basics.jpg'));
  const [certificate8] = useState(require('./Assets/UI&UX.jpg'));
  const [project1] = useState(require('./Assets/ROCK PAPER SCISSOR.png'));
  const [project3] = useState(require('./Assets/SIMPLE CALCULATOR.png'));
  const [project2] = useState(require('./Assets/Etch-a-Sketch Color Game.png'));
  const [project4] = useState(require('./Assets/Flames.png'));
  const [project5] = useState(require('./Assets/EverGreen.png'));
  const [AboutImage] = useState(require('./Assets/HomeImage.jpg'));
  const [NavImage] = useState(require('./Assets/Navimg.png'));

  const Images = {
    logo,
    htmllogo,
    csslogo,
    tailwindlogo,
    reactlogo,
    jslogo,
    gsapanimationlogo,
    pythonlogo,
    canvalogo,
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
    certificate6,
    certificate7,
    certificate8,
    project1,
    project2,
    project3,
    project4,
    project5,
    AboutImage,
    NavImage
  };
  return (
    <ImageContext.Provider value={Images}>
    <div>
      <Content></Content>
    </div>
    </ImageContext.Provider>
    
  )
}

export default App