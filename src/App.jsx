import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import { Header } from './components/Header.jsx';

/**
 * 
 * Exercise for the selective appearance and disappearance of a div
 */
/*
function App(){

  const [dialog, showDialog] = useState();
   let isClicked = false;
    //let dialog = null;
    
    function buttonClicked()
    {
        console.log('I am clicked .... ')
        
        showDialog(<div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
            <button>Proceed</button>
        </div>)        
      }

      return (
        <div>   
         {dialog}   
          <button onClick={buttonClicked}>Delete</button>
        </div>    
      );    
      
  }*/
 
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;