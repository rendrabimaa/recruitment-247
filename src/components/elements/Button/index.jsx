import PropTypes from 'prop-types'

const Button = ({ children, additionalClass, onClick }) => {
  return (
    <button className={`text-sm md:text-lg text-white bg-blue-500 w-fit p-2 rounded-lg font-semibold ${additionalClass}`} onClick={onClick}>{children}</button>
  )
}

Button.propTypes = {
    children: PropTypes.node,
    additionalClass: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button