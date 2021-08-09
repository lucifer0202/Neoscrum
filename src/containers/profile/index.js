import React, { useContext, useState } from 'react'
import Logo from '../../assets/imagenew.png'
import Picture from '../../assets/login.png'
import { Container, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import FeedbackContext from '../../context/feedbackContext';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    '& > *': {
        width: "auto",
        height: 'auto',
    },
}));
export default function Profile() {
    const classes = useStyles();
    // const [image, setImage] = useState({ preview: Picture, raw: "" });

    const { handleUserProfileUpdate, userInfo : { 
        name,
        email,
        image = { preview: Picture, raw: "" } } } = useContext(FeedbackContext)


    const handleChange = e => {
        console.log("$$$")
        if (e.target.files.length) {
            // setImage({
            //     preview: URL.createObjectURL(e.target.files[0]),
            //     raw: e.target.files[0]
            // });
            let image = {
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            };
            e.preventDefault()
            handleUserProfileUpdate({ image })
            console.log(image)
        }
    };



    return (
        <Container>
            <Grid item>
                <div style={{ height: '200px', background: `url(${Logo})` }}></div></Grid>
            <Grid item style={{ position: 'relative', bottom: '128px', }}>
                <div>
                    <label htmlFor="upload-button">
                        {image.preview ? (
                            <img src={image.preview} alt="dummy" width="300" height="300" style={{ borderRadius: '177px' }} />
                        ) : (
                            <>
  
                                <h5 className="text-center">Upload your photo</h5>
                            </>
                        )}
                    </label>
                    <input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleChange}
                    />
                    <br />
                </div>
                <Grid container >
                    <Grid item xs={4} style={{ background: '#acafb1' }}>
                       <h1> Name</h1>
                    </Grid>
                    <Grid item xs={8} style={{ background: "#e4e4b0" }}>
                        <h2>{name}</h2>
                    </Grid>
                    <Grid item xs={4} style={{ background: '#acafb1' }}>
                       <h1> Email</h1>
                    </Grid>
                    <Grid item xs={8} style={{ background: "#e4e4b0" }}>
                        <h2>{email}</h2>
                    </Grid>
                </Grid>
            </Grid>

        </Container>

    )
}