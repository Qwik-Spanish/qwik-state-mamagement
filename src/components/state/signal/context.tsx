import {
    component$,
    useSignal,
    createContextId,
    useContextProvider,
    useContext,
  } from '@builder.io/qwik';
  
  export const ContextAPISignal = component$(() => {
    return <First />;
  });
  
  export const CONTEXT_ID = createContextId('counter');
  
  export const First = component$(() => {
    // Creamos el contenedor con el valor del contador
    const counterSignal = useSignal(0);
  
    // Asignamos el valor (state = counterSignal) al contexto (CONTEXT_ID)
    useContextProvider(CONTEXT_ID, counterSignal);
  
    return (
      <div style="border: 2px solid red; padding: 10px; margin: 5px">
        Info in Parent (Counter {counterSignal.value})
        <hr />
        <Second />
      </div>
    );
  });
  
  export const Second = component$(() => {
    const counter = useContext(CONTEXT_ID) as {value: number};
    return (
      <div style="border: 2px solid green;margin: 5px">
        Second (Counter) : {counter.value}
        <br />
        <button onClick$={() => counter.value++}>+ 1</button>
        <br />
        <Third />
      </div>
    );
  });
  
  export const Third = component$(() => {
    const counter = useContext(CONTEXT_ID) as {value: number};
    return (
      <div style="border: 2px solid orange;margin: 5px">
        <button onClick$={() => counter.value++}>+1</button>
        &nbsp;&nbsp;Count: {counter.value} (Third)
      </div>
    );
  });
  