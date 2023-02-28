import { component$, useStore } from '@builder.io/qwik';

export const PropsStore = component$(() => {
  return <Parent />;
});

export const Parent = component$(() => {
  const userData = useStore({
    count: 0,
  });

  return (
    <div style="border: 2px solid red; padding: 10px; margin: 5px">
      Info in Parent (Counter {userData.count})
      <hr />
      <Child userData={userData} />
    </div>
  );
});

export const Child = component$(({ userData }: any) => {
  return (
    <div style="border: 2px solid green;margin: 5px">
      <button onClick$={() => userData.count++}>+1</button>
      &nbsp;&nbsp;Count: {userData.count}
    </div>
  );
});
