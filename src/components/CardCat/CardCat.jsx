
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardCat = ({cat}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250px" //Esto modifica el alto de la tarjeta
                    image={cat.url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       ID de la foto: {cat.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    El texto aquí debería ser una propiedad del objeto que use para las card.
                    Lo mismo ocurre con el título de arriba.    
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t" target='blank'>Ver link de la API</a> 
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardCat;