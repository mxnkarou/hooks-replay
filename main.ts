import { uniqueString } from 'https://deno.land/x/uniquestring@v1.0.3/mod.ts';
import Hooks from './hooks.json' assert { type: 'json' };

const mod = Hooks.map((hook) => {
  const str = uniqueString(15);
  return { ...hook, ...{ stacks: { name: str, uuid: str, ...hook.stacks } } };
});

mod.forEach(async (hook) => {
  await fetch('http://0.0.0.0:20456/v1/chainhooks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hook),
  }).then(console.log);
});
