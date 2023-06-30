import { Button } from '@mui/material'
import React from 'react'
// import '../styles/globals.css';

const StatForm = () => {
    const [title, setTitle] = React.useState('');
    const [subtitle, setSubTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [titleStat, setTitleStat] = React.useState('');
    const [percentage, setPercentage] = React.useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubTitleChange = (event) => {
        setSubTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleTitleStatChange = (event) => {
        setTitleStat(event.target.value);
    };

    const handlePercentageChange = (event) => {
        setPercentage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Title: ${title}, Percentage: ${percentage}`);
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
                <label>Sous-titre</label>
                <input
                    type="text"
                    value={subtitle}
                    onChange={handleSubTitleChange}
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
                <label>Type de statistique</label>
                <input
                    type="text"
                    value={titleStat}
                    onChange={handleTitleStatChange}
                    className='input-text'
                />
            </div>

            <div className='statistiques'>
                <label>Pourcentage</label>
                <input
                    type="text"
                    value={percentage}
                    onChange={handlePercentageChange}
                    className='input-text'
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

export default StatForm
