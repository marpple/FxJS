import curry from "../Strict/curry.js";
import nop from "../Strict/nop.js";

export default curry(function takeRaceC(l, iter) {
  return new Promise((resolve, reject) => {
    let res = [];
    Promise.all(
      [...iter].map(async (a) => {
        try {
          const b = await a;
          res.push(b);
          if (res.length == l) resolve(res);
          return b;
        } catch (e) {
          if (e != nop) throw e;
        }
      })
    )
      .then((_) => resolve(res))
      .catch(reject);
  });
});
