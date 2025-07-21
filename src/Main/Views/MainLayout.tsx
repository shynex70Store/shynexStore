import { Divider, Grid, IconButton, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { WhatsApp } from '@mui/icons-material';
import type { Product } from '../Interfaces/Components/CardProducts';
import ProductCard from '../Components/ProductCard';
import { Pants } from '../Data/Products';

const MainLayout = () => {

    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        setProducts(Pants);
    }, []);

    const openWhatsAppWindow = () => {
        window.open('https://wa.me/+573235883417','_blank');
    }

    return (
        <>
            <Stack
                width={'calc(100%-16px)'}
                height={50}
                sx={{
                    background: 'white',
                    padding: 1
                }}
                direction={'row'}
                justifyContent={'space-between'}
            >
                <img src={'./src/Images/logoShynexSinFondo.png'} />
                <Stack direction={'row'} gap={1} height={'auto'}>
                    <IconButton aria-label="whatsapp" color='success' size='large' onClick={openWhatsAppWindow}>
                        <WhatsApp fontSize='large' sx={{ color: '#4ccb5a' }} />
                    </IconButton>
                </Stack>
            </Stack>
            <Divider />
            <Stack width={'calc(100% - 32px)'} direction={'row'} justifyContent={'center'} padding={2} sx={{ backgroundColor: '#FFF' }}>
                <Stack width={'70%'}>
                    <Grid
                        width={'calc(100%-16px)'}
                        sx={{
                            backgroundColor: '#FFF'
                        }}
                        container
                        spacing={2}
                    >
                        {
                            products?.map((product: Product, index: number) => (
                                <Grid size={{ xs: 12, md: 3 }} key={`gridProduct${index}`}>
                                    <ProductCard
                                        name={product.name}
                                        detail={product.detail}
                                        price={product.price}
                                        stock={product.stock}
                                        urlImage={product.urlImage}
                                        colors={product.colors}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Stack>
            </Stack>
        </>
    );
}

export default MainLayout;