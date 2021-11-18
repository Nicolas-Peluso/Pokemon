import { React, useContext, useEffect } from 'react'
import Style from './HomeDetails.module.scss'
import { Global } from '../GlobalContext'

function HomeDetails() {
    const Context = useContext(Global)
    useEffect(() => {
        console.log(Context)
    }, [Context])

    return (
        <div className={Style.Home}>

        </div>
    )
}

export default HomeDetails
