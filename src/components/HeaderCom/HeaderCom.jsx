import React, { memo } from 'react'
import { NavLink, Route, Router } from 'react-router-dom';

export default memo(function HeaderCom() {
    return (
        <div>
            <NavLink exact to='/'>发现音乐</NavLink>
            <NavLink to='/mine'>我的音乐</NavLink>
            <NavLink to='/myfirend'>我的朋友</NavLink>
        </div>
    )
})
