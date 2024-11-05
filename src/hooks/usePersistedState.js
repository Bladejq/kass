import { useState, useEffect, useCallback } from "react";
import { set, get } from "idb-keyval";

export function usePersistedState(keyToPersistWith, defaultState) {
    const [state, setState] = useState(undefined);

    useEffect(() => {
        get(keyToPersistWith).then(retrievedState =>
            setState(retrievedState ?? defaultState));
    }, [keyToPersistWith, setState, defaultState]);

    const setPersistedValue = useCallback((newValue) => {
        setState(newValue);
        set(keyToPersistWith, newValue);
    }, [keyToPersistWith, setState]);

    return [state, setPersistedValue];
}