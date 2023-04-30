import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    console.log("useOnline hook called");
    useEffect(() => {
        console.log("useOnline -- useEffect called");

        const handleOnline = () => {
            console.log("Online listener called");
            setIsOnline(true);
        }
        const handleOffline = () => {
            console.log("Offline listener called");
            setIsOnline(false);
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, []);

    return isOnline;
}

export default useOnline;

/**
 * So here we used window event listener to tell what to do we go online or offline.
 * 
 * Here we are adding event listerners to window object.
 * So when the use effect is called it adds two listeners to window object. i.e: online and offline.
 * We write that in useeffect because when we write it outside then every time the hook renders, a new listener gets added. One listener does the job for us. So we write it in use effect.
 * 
 * We remove the listener because when component gets destroyed then listenersare of no use.
 * We use the function ref while removing(also adding) because we want to remove the function that we added for online/offline listener.
 */