import { AppBar, Box, Button, IconButton, Stack, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useRef } from 'react';

// michael.web4all@gmail.com

const tableData = {
    headers: ['Service', 'Price'],
    services: [
        { name: 'Basic Haircut', price: '£20' },
        { name: 'Styled Haircut', price: '£35' },
        { name: 'Kids\' Haircut', price: '£15' },
        { name: 'Hair Coloring', price: '£50' },
        { name: 'Hair Treatment', price: '£40' },
    ],
};

const infoParagraphs = [
    "We offer a variety of hair services tailored to your needs.",
    "Our experienced stylists ensure you get the best treatment.",
    "Visit us to experience top-notch hair care services."
];

export const Config = () => {
    const contactSectionRef = useRef<HTMLDivElement>(null);
    const pricingSectionRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <AppBar position="static" color="default" sx={{ backgroundColor: "grey"}}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, color: "white"}}>
                        My Hair
                    </Typography>
                    <Stack flexDirection="row" sx={{backgroundColor: "white", border: "3px solid darkgrey"}}>
                        <IconButton color="inherit" href="https://facebook.com" target="_blank">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="inherit" href="https://twitter.com" target="_blank">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="inherit" href="https://instagram.com" target="_blank">
                            <InstagramIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <AppBar position="static" sx={{ backgroundColor: "white"}}>
                <Toolbar>
                    <Stack flexDirection="row" justifyContent="flex-end" sx={{width: "100%"}}>
                        <Button
                            sx={{color: "black"}}
                            onClick={() =>
                                pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Pricing
                        </Button>
                        <Button
                            sx={{color: "black"}}
                            onClick={() =>
                                contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Contact Us
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar> 
            <Box
                sx={{
                    height: '70vh',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1599351430140-c70f0250bd70?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    }}
                >
                    Welcome to My App
                </Typography>
            </Box>
            <Box sx={{ mt: 8 }}>
                <Stack
                    ref={pricingSectionRef}
                    sx={{
                        height: 'max-content',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f5f5f5',
                        padding: 4,
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        Pricing Section
                    </Typography>
                    <Stack sx={{alignItems: 'center',  width: '80%', textAlign: 'center', mb: 4 }}>
                        {infoParagraphs.map((paragraph, index) => (
                            <Typography key={index} variant="body1" sx={{ mb: index < infoParagraphs.length - 1 ? 2 : 0 }}>
                                {paragraph}
                            </Typography>
                        ))}
                    <Stack
                        sx={{
                            width: '60%',
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                            borderRadius: 2,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: 3,
                        }}
                    >
                        <Box sx={{ overflowX: 'auto' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {tableData.headers.map((header, index) => (
                                            <TableCell
                                                key={index}
                                                align={index === 0 ? 'left' : 'right'}
                                                sx={{ fontWeight: 'bold', borderBottom: '2px solid #ccc' }}
                                            >
                                                {header}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableData.services.map((service, index) => (
                                        <TableRow key={index}>
                                            <TableCell
                                                sx={{
                                                    borderBottom: '1px solid #eee',
                                                }}
                                            >
                                                {service.name}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                sx={{
                                                    borderBottom: '1px solid #eee',
                                                }}
                                            >
                                                {service.price}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>

                    </Stack>
                    </Stack>               
                </Stack>
                <Stack
                    ref={contactSectionRef}
                    sx={{
                        height: 'max-content',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#e0f7fa',
                        padding: 4,
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        Contact Us
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            emailjs
                                .sendForm(
                                    'YOUR_SERVICE_ID',
                                    'YOUR_TEMPLATE_ID',
                                    e.target as HTMLFormElement,
                                    'YOUR_USER_ID'
                                )
                                .then(
                                    (result) => {
                                        console.log(result.text);
                                        alert('Message sent successfully!');
                                    },
                                    (error) => {
                                        console.log(error.text);
                                        alert('Failed to send message. Please try again.');
                                    }
                                );
                        }}
                        sx={{
                            width: '100%',
                            maxWidth: 600,
                            backgroundColor: 'white',
                            borderRadius: 2,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: 3,
                        }}
                    >
                        <Stack spacing={2}>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc',
                                }}
                            />
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc',
                                }}
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                required
                                rows={4}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc',
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ alignSelf: 'flex-end' }}
                            >
                                Send Message
                            </Button>
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: '400px',
                            mt: 4,
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b3c1c5e8e!2sHairdresser!5e0!3m2!1sen!2sus!4v1697041234567!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </Box>
                </Stack>
            </Box>
        </>
    );
};