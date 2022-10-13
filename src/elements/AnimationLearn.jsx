import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function App() {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./animation/isometric-learn.json')
        })
    }, [])

    return (
            <div className="thumbnail" ref={container}></div>
    );
}

export default App;