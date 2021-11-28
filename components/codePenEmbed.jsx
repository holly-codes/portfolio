import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const CodePenEmbed = function ({penId, penName, embedHeight, numColumns}) {
    const penUrl = `https://codepen.io/holly-codes/pen/${  penId}`;
    const scriptUrl = "https://cpwebassets.codepen.io/assets/embed/ei.js";
    const isMounted = useRef(false);

    const styleObject = {
        'grid-column': `1/${numColumns + 1}`
    }

    const loadScript = () => {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = 1;

        document.body.appendChild(script);
    }

    useEffect(() => {
        if (isMounted.current === false) isMounted.current = true;
    
        loadScript();
    
        // eslint-disable-next-line no-return-assign
        return () => (isMounted.current = false);
      }, []);

    return (
        <div style={styleObject}>
            <p className="codepen" data-height={embedHeight} data-slug-hash={penId} data-user="holly-codes">
                <span>See the Pen <a href={penUrl}>
                    {penName}</a> by Holly Burinda (<a href="https://codepen.io/holly-codes">@holly-codes</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
        </div>
    )
}

CodePenEmbed.propTypes = {
    penId: PropTypes.string.isRequired,
    penName: PropTypes.string.isRequired,
    embedHeight: PropTypes.number.isRequired,
    numColumns: PropTypes.number
}

CodePenEmbed.defaultProps = {
    numColumns: 1
}
export default CodePenEmbed;