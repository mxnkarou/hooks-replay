const { result } = await fetch('http://oreo-alpha.testnet.hiro.so:20446/v1/chainhooks').then((res) => {
  return res.json();
});

result.forEach(async (hook: any) => {
  try {
    if ((hook.predicate.rule.contract_identifier as string).includes('ST395G3354DQ27YKARF2ZQQ6HWBDJ2DR9Q81QXZA6')) {
      const res = await fetch(`http://oreo-alpha.testnet.hiro.so:20446/v1/chainhooks/${hook.chain}/${hook.uuid}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 200) {
        console.log('SUCCESS');
      }
    }
  } catch (err) {
    console.log(err);
  }
});
