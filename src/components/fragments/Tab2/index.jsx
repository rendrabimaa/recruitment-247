import PropTypes from 'prop-types';
import Button from '../../elements/Button';
import Table from '../Table';

const Tab2 = ({ numberA, randomNumbers, handleClickGenerate, handleSaveTab2}) => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col justify-between flex-1'>
          <p className='text-slate-700 font-semibold text-sm md:text-lg h-fit'>Anda telah memasukkan Bilangan {numberA}, klik Tombol &quot;Generate Numbers kembali&quot; untuk menghasilkan bilangan acak sebanyak {numberA} bilangan</p>
          <Button onClick={handleClickGenerate} additionalClass={'self-end mt-4'}>Generate Numbers</Button>
        </div>
        {randomNumbers.length > 0 && (
          <>
            <div className='overflow-y-auto h-32 md:h-48 mt-4'>
              <Table randomNumbers={randomNumbers} />
            </div>
            <p className='text-slate-700 text-sm mt-6'>Klik tombol &quot;Generate Numbers&quot; kembali untuk menghasilkan angka yang berbeda pada tabel</p>
            <Button onClick={handleSaveTab2} additionalClass={'self-end mt-2'}>Simpan & Lanjut ke Tab 3</Button>
          </>
        )} 
    </div>
  )
}

Tab2.propTypes = {
    activeTab: PropTypes.number,
    numberA: PropTypes.number,
    randomNumbers: PropTypes.array,
    handleClickGenerate: PropTypes.func,
    handleSaveTab2: PropTypes.func,
}

export default Tab2