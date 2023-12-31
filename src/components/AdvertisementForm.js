import { Button } from '@mui/material'
import React from 'react'
// import '../styles/globals.css';

const AdvertisementForm = () => {
    const [title, setTitle] = React.useState('');
    const [image, setImage] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [linkApp, setLinkApp] = React.useState('');
    const [linkPlay, setLinkPlay] = React.useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleLinkAppChange = (event) => {
        setLinkApp(event.target.value);
    };

    const handleLinkPlayChange = (event) => {
        setLinkPlay(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} style={{marginTop:'-3rem'}}> 
            <div className='statistiques'>
                <label>Titre</label>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className='input-text'
                />
            </div>

            <div className='statistiques'>
                <label>Description</label>
                <textarea
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    className='input-texterea'
                />
            </div>

            <div className='statistiques'>
                <label>Lien AppStore</label>
                <input
                    type="text"
                    value={linkApp}
                    onChange={handleLinkAppChange}
                    className='input-text'
                />
            </div>

            <div className='statistiques'>
                <label>Lien PlayStore</label>
                <input
                    type="text"
                    value={linkPlay}
                    onChange={handleLinkPlayChange}
                    className='input-text'
                />
            </div>

            <div className='statistiques'>
                <label>Image</label>
                <input
                    type="file"
                    value={image}
                    onChange={handleImageChange}
                    className='input-image'
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ textTransform: 'none', margin: '1rem 1rem 0rem 0rem' }}>
                    Ajouter
                </Button>
            </div>

        </form>
    )
}

export default AdvertisementForm
