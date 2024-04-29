import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
  ];
  
  
  export function Todo( props ) {
    return <li>{props.text}</li>;
  }


export  default function Examples() {

    
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

    return  (
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
    );

}