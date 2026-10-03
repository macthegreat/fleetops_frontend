import './Button.css'


const Button = ({ children, variant }) => {
  return (
   
      <button className={`btn btn-${variant}`}>
        {children}
      </button>
 
  )
}

export default Button
