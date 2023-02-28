import { component$ } from '@builder.io/qwik';
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
  return (
    <div>
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
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
