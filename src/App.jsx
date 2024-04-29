
import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import { Header } from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data';

function CoreConcepts(props)
{
  return(
    <li>
      <img src={props.image}  alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];


export function Todo( props ) {
  return <li>{props.text}</li>;
}

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

  const [selectedTopic, setSelectedTopic] = useState();

  //console.log(`State vars is ${selectedTopic} and ${setSelectedTopic}`);
  //console.log({...CORE_CONCEPTS[0]});


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    //console.log(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
            
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            { DUMMY_TODOS.map((todoItem) => (<Todo key={todoItem} text={todoItem} />))}
            <TabButton isSelected={selectedTopic === 'components'} 
              onSelect={() => handleSelect('components')}
              >
              components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} 
              onSelect={() => handleSelect('jsx')}
              >
              jsx
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} 
              onSelect={() => handleSelect('props')}
              >
              props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} 
              onSelect={() => handleSelect('state')}
              >
              state
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;