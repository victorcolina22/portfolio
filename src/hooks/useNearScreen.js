import { useEffect, useState } from "react"

export const useNearScreen = (targetRef) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const callback = (entries) => {
            const { isIntersecting } = entries[0];
            if (isIntersecting) {
                setShow(true);
                entries[0].target.classList.add('fadeUp');
            };
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: '100px 0px 0px 0px',
            threshold: 0.3
        });

        targetRef.forEach(target => (observer.observe(target.current)))

    }, [targetRef]);

    return [show];
}