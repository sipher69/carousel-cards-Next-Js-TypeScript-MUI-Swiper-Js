import React from 'react'
import { Card, Typography, CardMedia, Avatar, Box, Divider} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
interface Props {
  key: number,
  title: string,
  image: string,
  category: string,
  flag: string,
  itemsCart: number,
  price: string,
  views: number,
  currency: string
}


const CardComponet = ({key,image,title,category,flag,itemsCart,views,price,currency}:Props) => {
  return (

   
    <Card sx={{ maxWidth: 275, bgcolor:'#121212', marginTop:'20px', display:"flex", flexDirection:"column", justifyContent:'center' }} key={key}>
 
      <CardMedia
        sx={{ height: 100 }}
         title={title}
      >
        <Image src={image} width={400} height={98} alt={title} loading="lazy" style={{objectFit:"cover"}}/>
      </CardMedia>
      <Box  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding:1, height:'10px', gap:2, paddingLeft:2}}>
      <Typography fontSize={'10px'} color='#f5f5f5'>{category}</Typography>
      <CardMedia
       sx={{ width: '20px', height: '20px' }}
        image={flag}
        title={currency}
       />
      </Box>
      
      <Typography variant='subtitle1' color='#f5f5f5' marginLeft={1}>{title}</Typography>
      <Divider sx={{bgcolor:'#f5f5f5', height:2, width:"90%", marginLeft:'5%'}}/>

      <Box  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',width:"90%", padding:1, justifyContent:'space-evenly'}}>

      <ShoppingCartIcon style={{ color: 'white', fontSize:'14px', marginRight:'-4%' }}/>
      <Typography variant='overline' color='#f5f5f5'>{currency} {' '} {price}</Typography>

      <VisibilityIcon style={{ color: 'white', fontSize:'14px', marginRight:'-4%' }}/>
      <Typography variant='overline' color='#f5f5f5'>{views}</Typography>

      
      <ShoppingCartIcon style={{ color: 'white', fontSize:'14px', marginRight:'-4%' }}/>
      <Typography variant='overline' color='#f5f5f5'>{itemsCart}</Typography>

      
      </Box>
      </Card>
     

  )
}

export default CardComponet