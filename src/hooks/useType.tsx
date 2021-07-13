import { createContext, ReactNode, useContext, useState } from 'react';

// Create context
type ContextData = {
    type: string,
    setType: (type: string) => void,
}

const Context = createContext<ContextData>(
    {} as ContextData
);

// Create data provider
type TypeProviderProps = {
    children: ReactNode,
}

export function TypeProvider({ children }: TypeProviderProps) {
    const [type, setType] = useState('deposit');

    return (
        <Context.Provider value={{ type,  setType }}>
            {children}
        </Context.Provider>
    );
};

// Create hook
export function useType() {
    const context = useContext(Context);
    
    return context;
}