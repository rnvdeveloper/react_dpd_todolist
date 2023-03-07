import "./Button.scss";

// Button receives children and an action as parameteres
const Button = ({ children, onClick }) => {
   return (
      <button className="button" onClick={onClick}>
         {children}
      </button>
   );
};

export default Button;
