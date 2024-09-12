import { useState } from "react";
import { useCallback } from "react";

// данный компонент тестовый, 
// пока что в нем ничего особо важного не лежит.





const ThreePage = () => {

    // const [hranilishe, FunctiaHran] = useState(1)

    // const onClick = () => {FunctiaHran(hranilishe+1)}
    const [count, setCount] = useState(0);

        const increment = useCallback(() => {
            setCount(count + 1);
        }, [count]);
    return(
        <>
            {/* <button type="button" onClick={onClick}>
                Click Me!
            </button>
            <p>{hranilishe}</p> */}
            <div>
                <p>Current count: {count}</p>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    );
};

export default ThreePage;