import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {
  BasicSignal,
  ContextAPISignal,
  PropsSignal,
} from '~/components/state/signal';
import {
  BasicStore,
  ContextAPIStore,
  PropsStore,
  StoreNORecursivity,
  StoreRecursivity,
  StoreWithArrayValuesRecursivity,
  StoreWithArrayValuesRecursivityThree,
  StoreWithArrayValuesRecursivityTwo,
} from '~/components/state/store';

export default component$(() => {
  useStylesScoped$(`
    p {
      font-size: large;
      margin-bottom: 1.5rem;
    }
  `)
  return (
    <div>
      <p>Todo lo que se ve a continuación está explicado paso a paso en el <a href="https://mugan86.medium.com/qwik-state-management-d42eb31471c8" target="_blank">siguiente artículo</a>. Si queréis ver paso a paso el desarrollo del curso de Qwik mediante artículos <b><u>os invito</u> a que os suscribáis y <a href="https://mugan86.medium.com/" target="_blank">me sigáis en Medium (TOTALMENTE GRATIS)</a></b> y consultéis <a href="https://mugan86.medium.com/list/qwik-paso-a-paso-desde-0-al-detalle-e7df8b471166" target="_blank">esta lista de artículos (en orden de 0 a más)</a> para aprender todo sobre Qwik</p>
      <hr/>
      <h2>1.- useSignal Básico</h2>
      <BasicSignal />
      <hr />
      <h2>2.- useStore Básico</h2>
      <BasicStore />
      <hr />
      <h2>3.- useStore - SIN Recursividad</h2>
      <StoreNORecursivity />
      <hr />
      <h2>4.- useStore - CON Recursividad</h2>
      <StoreRecursivity />
      <hr />
      <h2>5.- useStore - CON Recursividad y valores de array</h2>
      <StoreWithArrayValuesRecursivity />
      <hr />
      <h2>5.- useStore - CON Recursividad y valores de array (II)</h2>
      <StoreWithArrayValuesRecursivityTwo />
      <hr />
      <h2>5.- useStore - CON Recursividad y valores de array (III)</h2>
      <StoreWithArrayValuesRecursivityThree />
      <hr />
      <h2>6.- useSignal - Pasar información estado entre componentes</h2>
      <PropsSignal />
      <hr />
      <h2>7.- useStore - Pasar información estado entre componentes</h2>
      <PropsStore />
      <hr />
      <h2>8.- useSignal - Pasar información estado con Context API</h2>
      <ContextAPISignal />
      <hr/>
      <h2>9.- useStore - Pasar información estado con Context API</h2>
      <ContextAPIStore />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik - Manejo de los estados / State management',
  meta: [
    {
      name: 'description',
      content: 'Resultado del tutorial publicado en Medium (https://mugan86.medium.com/qwik-state-management-d42eb31471c8) sobre como trabajar con el estado de las aplicaciones mediante useSignal y useStore',
    },
  ],
};
