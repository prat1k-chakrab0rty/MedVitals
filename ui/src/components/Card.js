import { Box, CardContent, Typography } from '@mui/material';
import React from 'react';


function Card({bubbleColor,backGroundColor,title,description,cardIcon}) {
    return (
        <Box sx={{ backgroundColor: backGroundColor, borderRadius: '12px', width: '400px',position:'relative',overflow: 'hidden' }}>
            <CardContent>
                <Box
                    sx={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        top: '-313px',
                        right: '-79px',
                        backgroundColor: bubbleColor,
                        borderRadius: '200px',
                        zIndex: 0,
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        bottom: '-321px',
                        left: '150px',
                        backgroundColor: bubbleColor,
                        borderRadius: '200px',
                        zIndex: 0,
                    }}
                />

                <Box sx={{ mt: 4 }}>
                    <img src={cardIcon} />
                </Box>
                <Typography variant="h6" component="div" sx={{ my: 2 }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ pb: 10 }}>
                    {description}
                </Typography>
            </CardContent>
        </Box>
    )
}

export default Card