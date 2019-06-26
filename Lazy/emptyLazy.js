const emptyIter = (function *() {} ());
export default function emptyLazy() { return emptyIter; };
