export const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj as {}) as (keyof Obj)[];
};
