import { useState } from 'react';
import Tab1 from '../../fragments/Tab1';
import Tab2 from '../../fragments/Tab2';
import Tab3 from '../../fragments/Tab3';

const Panel = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [numberA, setNumberA] = useState();
  const [numberB, setNumberB] = useState();
  const [randomNumbers, setRandomNumbers] = useState([]);

  const handleSaveTab1 = () => {
    if(isNaN(numberA)) {
      alert('Isi Form dengan sebuah bilangan bulat positif')
    } else if (numberA <= 0) {
      alert('Masukkan bilangan bulat Positif')
      setNumberA(0)
    } else {
      setActiveTab(2)
    }

  }

  const handleSaveTab2 = () => {
    setActiveTab(3)
  }
  
  const generateRandomNumbers = () => {
    const randomNums = [];
    const min = -100000;
    const max = 100000;
    for(let i = 0; i < numberA; i++) {
      const random = Math.floor(Math.random() * (max - min + 1) ) + min;
      randomNums.push(random)
    }
    setRandomNumbers(randomNums)
  }

  const generateSmallestPositiveNumber = () => {
    let smallestNumber = 1;
    while(randomNumbers.includes(smallestNumber)){
      smallestNumber++;
    }
    setNumberB(smallestNumber);
  }

  return (
    <div className='my-4 w-full max-w-2xl mx-auto bg-slate-200 border-4 border-blue-500 pb-20 pt-5 px-4 md:px-20 md:py-10 flex-1 rounded-lg'>
      {
        activeTab === 1 && (
          <Tab1 numberA={numberA} setNumberA={setNumberA} handleSaveTab1={handleSaveTab1}/>
        )
      }
      {
        activeTab === 2 && (
          <Tab2 numberA={numberA} randomNumbers={randomNumbers} handleClickGenerate={generateRandomNumbers} handleSaveTab2={handleSaveTab2}/>
        )
      }
      {
        activeTab === 3 && (
          <Tab3 numberA={numberA} numberB={numberB} handleClickGenerate={generateSmallestPositiveNumber} randomNumbers={randomNumbers}/>
        )
      }
      
    </div>
  )
};

export default Panel;
