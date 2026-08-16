import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** True once the component has mounted on the client. Used to defer
 * rendering theme-dependent UI until after hydration (avoids a mismatch
 * between server and client markup). Implemented with useSyncExternalStore
 * instead of a setState-in-effect so it doesn't trigger an extra render. */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
