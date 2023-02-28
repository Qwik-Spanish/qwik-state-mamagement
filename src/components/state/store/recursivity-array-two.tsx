import { component$, useStore } from '@builder.io/qwik';

export const StoreWithArrayValuesRecursivityTwo = component$(() => {
  const store = useStore(
    {
      name: 'Anartz', // (1) - Top Level
      lastName: 'Mugika Ledo', // (2) - Top Level
      otherData: { hobbies: ['football', 'read', 'music'] }, // <===============
    },
    { recursive: true }
  );

  return (
    <>
      <ul>
        <li>
          {store.name} {store.lastName} (Esto SI cambia)
        </li>
        <li>Hobbies: {store.otherData.hobbies.toString()} (Esto SI cambia)</li>
      </ul>
      <button
         onClick$={() =>
          (store.otherData.hobbies[0] = 'running')
        }
      >
        Click me to change hobbies
      </button>
      &nbsp;
      <button
        onClick$={() => {
          store.name = 'Anartz----';
          store.lastName = 'Mugika_Ledo';
        }}
      >
        Click me to change Principal
      </button>
    </>
  );
});
