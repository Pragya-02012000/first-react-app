import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import CustomButton from './Button';
import CustomProgress from './CustomProgress';

function App() {
  return (
    <div>
      <Header />
      <AddContact />
      <div className='d-flex mb-4'>
        <CustomButton
          label={"First"}
          variant={"primary"}
        />
        <CustomButton
          label={"Second"}
          variant={"success"}
        />
        <CustomButton
          label={"Third"}
          variant={"warning"}
        />
        <CustomButton />
      </div>
      <CustomProgress/>

    </div>
  );
}

export default App;
