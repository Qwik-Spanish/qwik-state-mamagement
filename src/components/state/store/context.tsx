import {
    component$,
    createContextId,
    useContextProvider,
    useContext,
    useStore,
  } from '@builder.io/qwik';
  
  export const ContextAPIStore = component$(() => {
    return <First />;
  });
  
  export const CONTEXT_ID = createContextId('counter');
  
  export const First = component$(() => {
    // Creamos el contenedor con el valor del contador
    const counterStore = useStore({ counter: 0 });
  
    // Asignamos el valor (state = counterSignal) al contexto (CONTEXT_ID)
    useContextProvider(CONTEXT_ID, counterStore);
  
    return (
      <div style="border: 2px solid red; padding: 10px; margin: 5px">
        Info in Parent (Counter {counterStore.counter})
        <hr />
        <Second />
      </div>
    );
  });
  
  export const Second = component$(() => {
    const counterStore = useContext(CONTEXT_ID) as { counter: number};
    return (
      <div style="border: 2px solid green;margin: 5px">
        Second (Counter) : {counterStore.counter}
        <br />
        <button onClick$={() => counterStore.counter++}>+ 1</button>
        <br />
        <Third />
      </div>
    );
  });
  
  export const Third = component$(() => {
    const counterStore = useContext(CONTEXT_ID)  as { counter: number};
    return (
      <div style="border: 2px solid orange;margin: 5px">
        <button onClick$={() => counterStore.counter++}>+1</button>
        &nbsp;&nbsp;Count: {counterStore.counter} (Third)
      </div>
    );
  });
  