import PropTypes from 'prop-types';
import Button from '../../elements/Button';

const Tab3 = ({ numberA ,numberB, handleClickGenerate, randomNumbers }) => {
  const randomNumberAsText = randomNumbers.join(",")


  return (
    <div className='flex flex-col'>
        <p className='text-slate-700 text-sm md:text-lg font-semibold whitespace-normal break-words'>Pada tab sebelumnya kamu telah menghasilkan {numberA} bilangan secara acak, yaitu : [{randomNumberAsText}]</p>
        {numberB ? (
          <>
            <div className='mt-12 self-center flex justify-center items-center w-20 md:w-40 h-20 md:h-40 rounded-full border-4 md:border-8 border-blue-500 bg-slate-300'>
              <h3 className='text-3xl md:text-5xl font-bold text-blue-500'>{numberB}</h3>
            </div>
            <p className='mt-4 text-sm font-semibold text-slate-600 mx-auto'>{numberB} adalah bilang positif terkecil yang tidak ada pada tabel tab ke 2</p>
          </>
        ): (
          <>
            <p className='mt-12 text-sm font-semibold text-slate-600'>Klik tombol dibawah ini untuk generate bilangan positif terkecil yang tidak ada pada table tab ke 2</p>
            <Button onClick={handleClickGenerate} additionalClass={'self-center mt-4'}>Generate Smallest Number</Button>
          </>
        )}
    </div>
  )
}

Tab3.propTypes = {
    numberA: PropTypes.number,
    numberB: PropTypes.number,
    handleClickGenerate: PropTypes.func,
    randomNumbers: PropTypes.array,
}

export default Tab3