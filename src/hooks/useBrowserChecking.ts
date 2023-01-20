import {useEffect, useState} from "react";

export const useBrowserChecking = () => {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [compatibility, setCompatibility] = useState(false);
    const [camera, setCamera] = useState(false);
    const [internet, setInternet] = useState(false);
    const [saver, setSaver] = useState<boolean[]>([]);

    useEffect(() => {
        setLoading1(true);
        setTimeout(() => {
            setCompatibility(true);
            setSaver(old => [...old, true]);
            setLoading1(false);
            setLoading2(true)
            setTimeout(() => {
                const doesitSupport = document.pictureInPictureEnabled;
                setCamera(doesitSupport);
                setLoading2(false);
                setSaver(old => [...old, true]);
                setLoading3(true);
                setTimeout(() => {
                    const speed = navigator.onLine;
                    setSaver(old => [...old, true]);
                    setInternet(speed);
                    setLoading3(false);
                }, 1000)
            }, 1000)
        }, 1000)
    }, [])

    return {
        loading1,
        loading2,
        loading3,
        saver,
        compatibility,
        camera,
        internet
    }
}