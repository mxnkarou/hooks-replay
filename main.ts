import { uniqueString } from 'https://deno.land/x/uniquestring@v1.0.3/mod.ts';
import Hooks from './hooks.json' assert { type: 'json' };

const mod = Hooks.map((hook) => {
  const str = uniqueString(15);
  return { ...hook, ...{ stacks: { name: str, uuid: str, ...hook.stacks } } };
});

mod.forEach(async (hook) => {
  // http://oreo-alpha.testnet.hiro.so:20446/v1/chainhooks
  // http://0.0.0.0:20456/v1/chainhooks
  const res = await fetch('http://0.0.0.0:20456/v1/chainhooks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hook),
  });

  if (res.status === 200) {
    console.log('SUCCESS');
  }
});
