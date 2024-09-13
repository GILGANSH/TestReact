

// проверяем как работает контекст


import { useContext, createContext } from "react";


const DasuraContext = createContext(); // Объект контекста уже существует, поэтому создаем экземпляр.

const Glavni = () => {
    const data = "Это тестовые данные которые я перекидываю в другой компонент";
    const asdon = 504
    return (
        <DasuraContext.Provider value={{data, asdon}}>
            <ThreePage />
        </DasuraContext.Provider>
    );
};


const ThreePage = () => {
    const datawe = useContext(DasuraContext);
    return (
        <div>
            <p> Это переданные данные: {datawe.asdon} </p>
            <p> Это переданные данные: {datawe.data} </p>
        </div>
    );
};

export default Glavni;