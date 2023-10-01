
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './CardCat.css'

const CardCat = ({cat}) => {
    return (
        <Card className='sombra' sx={{ maxWidth: 445}}>
            <CardActionArea >
                <CardMedia
                    className='mi_img'
                    component="img"
                    height="250px" //Esto modifica el alto de la tarjeta
                    image={cat.url}
                    alt="imágenes de gatos usando API"
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
                    <a href={cat.url} target='blank'>Ver url de la foto</a> 
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardCat;