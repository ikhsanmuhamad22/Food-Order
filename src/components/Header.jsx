import headerImg from '../assets/logo.jpg';
import Button from './UI/Button';

export default function Header() {
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={headerImg} alt="A restourant" />
          <h1>Food Order</h1>
        </div>
        <nav>
          <Button textOnly={true}>Cart (1) </Button>
        </nav>
      </header>
    </>
  );
}
