import Button from "../../elements/Button"
import PropTypes from 'prop-types'

const Tab1 = ({numberA, setNumberA, handleSaveTab1}) => {

  const handleInputChange = (e) => {
      const inputNumber = parseInt(e.target.value)
      setNumberA(inputNumber)
  }

  
  return (
    <>
      <div className="flex justify-start mb-24">
        <h3 className="text-slate-700 font-bold text-lg">Masukkan Bilangan Positif</h3>
      </div>
      <div className="flex flex-col">
          <input
          type="number" 
          required 
          placeholder="Masukkan Bilangan Disini ..." 
          className="border-blue-500 border-solid border-2 h-10 md:h-12 px-4 text-sm rounded-lg"
          onChange={handleInputChange}
          value={numberA || ""}
          />
          <Button onClick={handleSaveTab1} additionalClass={'mt-8 self-end'}>Simpan & Lanjut ke Tab 2</Button>
      </div>
    </>
  )
}

Tab1.propTypes = {
    numberA: PropTypes.number,
    setNumberA: PropTypes.func,
    handleSaveTab1: PropTypes.func,
}

export default Tab1