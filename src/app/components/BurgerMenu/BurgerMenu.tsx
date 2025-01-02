import { VscMenu } from "react-icons/vsc";

interface Props {
  handleMenuOpen: () => void;
}

const BurgerMenu = ({ handleMenuOpen }: Props): React.ReactElement => {
  return (
    <button onClick={handleMenuOpen}>
      <VscMenu color="#888aff" size={20} />
    </button>
  );
};

export default BurgerMenu;
