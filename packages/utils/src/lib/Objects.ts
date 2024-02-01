import copy from "fast-copy";

/**
 * Beware that this doesn't new up a new instance.
 * => observable are not copied.
 * @param obj
 */
export const deepCopy = <T>(obj: T) => {
	return copy<T>(obj);
};
