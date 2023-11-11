import PropTypes from 'prop-types'

const Table = ({ randomNumbers }) => {
  return (
    <table className='border border-black w-full text-center bg-white mt-4'>  
      <tbody>
          {randomNumbers.map((number, index) => {
          return (
          <tr className='w-full py-4 border border-blue-500 text-sm md:text-lg' key={index}>
            <td>
              {number}
            </td>
          </tr>
          )
          })}
      </tbody>
        
    </table>
  )
}

Table.propTypes = {
  randomNumbers: PropTypes.array,
}

export default Table