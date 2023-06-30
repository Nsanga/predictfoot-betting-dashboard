import Title from '../../components/Title';
import React, { useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import { Grid } from '@mui/material'
import Table from '../../components/Table';
import DetailsUsersBlog from '../../components/DetailsUsersBlog';
import ModalForm from '../../components/Modal';
import { useMediaQuery, useTheme } from '@material-ui/core';

const LandingPageBlog = ({ setPageTitle, setSubTitle }) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    useEffect(() => {
        setPageTitle('Landing Page');
        setSubTitle('Blog');
    }, [setPageTitle, setSubTitle]);

    const articles =
        [
            {
                avatar: "https://example.com/avatar1.png",
                name: "John Doe",
                date: "2/05/2023",
                titre: "Les avantages de travailler à distance"
            },
            {
                avatar: "https://example.com/avatar2.png",
                name: "Jane Smith",
                date: "3/05/2023",
                titre: "Comment gérer son temps efficacement"
            },
            {
                avatar: "https://example.com/avatar3.png",
                name: "Bob Johnson",
                date: "4/05/2023",
                titre: "Les défis du télétravail et comment les surmonter"
            }
        ];

    const columns = ["Auteur", "date", "titre"];

    return (
        <>
            {isMatch ? (
                <>
                    <Box padding='8px'>
                        <ModalForm
                            titleModal='Ajouter un blog'
                            auteur='auteur'
                            titre='titre'
                            preambule='preambule'
                            date='date'
                            description='description'
                            avatar='avatar'
                            image='image' />
                        <Box marginLeft='-1rem' marginRight='1rem'>
                            <Table data={articles} columns={columns} action={true} />
                        </Box>

                    </Box>
                </>
            ) : (

                <>
                    {/* <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={3} className='nav'>
                                    <Layout />
                                </Grid>
                                <Grid item xs={9}>
                                
                                </Grid>
                            </Grid>
                        </Box> */}
                    <Title titre='Landing Page' subtitle='Blog' />

                    <Box sx={{ flexGrow: 1 }} className='box-custom-old'>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                                    <ModalForm
                                        titleModal='Ajouter un blog'
                                        auteur='auteur'
                                        titre='titre'
                                        preambule='preambule'
                                        date='date'
                                        description='description'
                                        avatar='avatar'
                                        image='image' />
                                </Stack>
                                <Table data={articles} columns={columns} action={true} />
                            </Grid>
                            <Grid item xs={4}>
                                <DetailsUsersBlog />
                            </Grid>
                        </Grid>
                    </Box>
                </>
            )}
        </>
    )
}

export default LandingPageBlog
