import React, { memo, useState } from 'react';

function Page1(props) {
    console.log('page1 render', props)

    const [count, setCount] = useState(0);

    return (
        <>
            page1
            <div onClick={ () => setCount(count + 1) }>change local state { count }</div>
        </>
    );
}

export default memo(Page1);
