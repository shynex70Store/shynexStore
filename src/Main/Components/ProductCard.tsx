import type { FunctionComponent } from "react";
import type { Product } from "../Interfaces/Components/CardProducts";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { formattedPrice } from "../Functions/General";
import { Circle } from "@mui/icons-material";

const ProductCard: FunctionComponent<Product> = (
    {
        name,
        price,
        urlImage,
        colors = []
    }
) => {
    return (
        <Card>
            <Stack direction={'row'} width={'100%'} justifyContent={'center'}>
                <CardMedia
                    component='img'
                    image={`./src/Images/${urlImage}`}
                />
            </Stack>
            <CardContent>
                <Stack direction={'column'} width={'100%'} justifyContent={'space-between'}>
                    <Typography variant="body1"><b>{name}</b></Typography>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}><b>Precio:</b> {formattedPrice.format(price)}</Typography>
                    <Stack direction={'row'} gap={1.5}>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}><b>Colores:</b></Typography>
                        <Stack direction={'row'} gap={.5}>
                        {
                            colors.map((color: string) => (
                                <Circle fontSize='small' sx={{ color: color }} />
                            ))
                        }
                        </Stack>
                    </Stack>
                    {/* <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}><b>Detalle:</b> {detail}</Typography>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}><b>Stock:</b> {stock}</Typography> */}
                </Stack>
            </CardContent>
        </Card>
    );
}

export default ProductCard;