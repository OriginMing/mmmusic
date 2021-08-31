import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
export default memo(function Discover(props) {
    const { route } = props;
    return (
        <div>
            发现音乐
            {renderRoutes(route.routes)}
        </div>
    )
})
