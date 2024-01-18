import { Product } from "@/app/service/SearchService";
import {
 CardContent,
 CardMedia,
 Typography,
} from "@mui/material";
import { Card } from "@nextui-org/react";
import { makeStyles } from "@mui/styles";
import Link from 'next/link';

interface ProductCardProps {
 product: Product;
 term: string;
}

const useStyles = makeStyles({
  card: {
    position: "relative",
    width: 200,
    height: 400,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    maxWidth: "200px",
    border: "1px solid lightgray",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
    },
  },
});

function formatPrice(price: number) {
 return new Intl.NumberFormat("pt-BR").format(price);
}

function calculateDiscount(originalPrice: number, currentPrice: number) {
 return ((originalPrice - currentPrice) / originalPrice) * 100;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, term }) => {
 const classes = useStyles();

 return (
  <Link href={{
    pathname: '/productdescription',
    query: {
      id: encodeURIComponent(product.id),
      term: encodeURIComponent(term)
      
    }
  }}>
     <Card className={classes.card}>
       <CardMedia
         sx={{ height: 200 }}
         image={product.thumbnail}
         title={product.title}
         style={{ objectFit: "contain" }}
       />
       <CardContent>
         <Typography
           gutterBottom
           variant="subtitle1"
           component="div"
           style={{ fontSize: "14px" }}
         >
           {product.title}
         </Typography>
         {product.original_price && (
           <Typography variant="body2" color="text.secondary" style={{ fontSize: '12px', textDecoration: 'line-through' }}>
             R$ {formatPrice(product.original_price)}
           </Typography>
         )}
         {product.price ? (
           <Typography variant="body2" color="text.secondary">
             R$ {formatPrice(product.price)} {product.original_price && <span style={{fontSize: '10px', color: 'green'}}>{Math.floor(calculateDiscount(product.original_price, product.price))}% OFF</span>}
           </Typography>
         ) : (
           <Typography variant="body2" color="text.secondary">
             R$ {formatPrice(product.original_price)}
           </Typography>
         )}
       </CardContent>
     </Card>
   </Link>
 );
};

export default ProductCard;