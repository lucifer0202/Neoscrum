import React, { useState } from 'react'
import GridView from '../../components/gridview'
import { AppBar,Toolbar,IconButton,Typography, Button } from '@material-ui/core'

export default function Feedback() {

    const [isImageVisible, setIsImageVisible] = useState(false)

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button variant='contained' color="secondary">Add</Button>
                </Toolbar>
            </AppBar>
            <GridView isImageVisible={isImageVisible} />
        </div>
    )
}
