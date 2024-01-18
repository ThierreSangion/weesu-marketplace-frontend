import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Image from "next/image";

interface DescriptionProps {
  productDescription: ProductDescription;
}

interface ProductDescription {
  id: string;
  title: string;
  price: number;
  original_price: number;
  plain_text: string;
  pictures: {
    url: string;
  }[];
  attributes: {
    name: string;
    value_name: string;
  }[];
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
 };

function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR").format(price);
}

function calculateDiscount(originalPrice: number, currentPrice: number) {
  return ((originalPrice - currentPrice) / originalPrice) * 100;
}

const ProductDescriptionComponent: React.FC<DescriptionProps> = ({
  productDescription,
}) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "80vh" }}
    >
      <Box
        sx={{
          maxWidth: "none",
          p: 4,
          borderRadius: 4,
          boxShadow: 2,
          backgroundColor: "white",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "none", 
                  p: 4,
                  borderRadius: 4,
                  boxShadow: 2,
                  backgroundColor: "white",
                  marginTop: 2,
                  marginBottom: 2,
                }}
              >
                <Image
                  src={productDescription.pictures[0].url}
                  alt={productDescription.title}
                  width={500} 
                  height={500}
                />
              </Box>
              <Box
                sx={{
                  maxWidth: "none", 
                  p: 4,
                  borderRadius: 4,
                  boxShadow: 2,
                  backgroundColor: "white",
                  marginTop: 2,
                  marginBottom: 2,
                }}
              >
                <Typography variant="h5">{productDescription.title}</Typography>
                {productDescription.original_price && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontSize: "12px", textDecoration: "line-through" }}
                  >
                    R$ {formatPrice(productDescription.original_price)}
                  </Typography>
                )}
                {productDescription.price ? (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontSize: "14px" }}
                  >
                    R$ {formatPrice(productDescription.price)}{" "}
                    {productDescription.original_price && (
                      <span style={{ fontSize: "14px", color: "green" }}>
                        {Math.floor(
                          calculateDiscount(
                            productDescription.original_price,
                            productDescription.price
                          )
                        )}
                        % OFF
                      </span>
                    )}
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontSize: "12px" }}
                  >
                    R$ {formatPrice(productDescription.original_price)}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  maxWidth: "none", 
                  p: 4,
                  borderRadius: 4,
                  boxShadow: 2,
                  backgroundColor: "white",
                  marginTop: 2,
                  marginBottom: 2,
                }}
              >
                <Typography variant="h6">Descrição</Typography>{" "}
                <Typography variant="body2">
                  {productDescription.plain_text}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Especificações</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productDescription.attributes.map((attribute, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {attribute.name}
                        </TableCell>
                        <TableCell align="right">
                          {attribute.value_name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </div>
  );
};
export default ProductDescriptionComponent;
