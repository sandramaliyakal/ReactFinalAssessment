import React, { useState, useEffect } from "react";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { Add, Edit, Delete, Close as CloseIcon } from "@material-ui/icons";

function ProducyList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      title: title,
      url: url,
      thumbnailUrl: thumbnailUrl,
    };
    setProducts([...products, newProduct]);
    setTitle("");
    setUrl("");
    setThumbnailUrl("");
    setAddDialogOpen(false);
  };

  const handleEditProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? selectedProduct : product
    );
    setProducts(updatedProducts);
    setSelectedProduct(null);
    setEditDialogOpen(false);
    setSnackbarOpen(true);
  };

  const handleDeleteProduct = () => {
    const updatedProducts = products.filter(
      (product) => product.id !== selectedProduct.id
    );
    setProducts(updatedProducts);
    setSelectedProduct(null);
    setDeleteDialogOpen(false);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setTitle(product.title);
    setUrl(product.url);
    setThumbnailUrl(product.thumbnailUrl);
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setDeleteDialogOpen(true);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <ImageList cols={4}>
        {products.map((product) => (
          <ImageListItem key={product.id}>
            <img src={product.thumbnailUrl} alt={product.title} />
            <ImageListItemBar
              title={product.title}
              subtitle={<span>by: Unknown</span>}
              actionIcon={
                <>
                  <IconButton
                    aria-label={`edit ${product.title}`}
                    onClick={() => handleEditClick(product)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    aria-label={`delete ${product.title}`}
                    onClick={() => handleDeleteClick(product)}
                  >
                    <Delete />
                  </IconButton>
                </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => setAddDialogOpen(true)}
      >
        Add Product
      </Button> */}

      {/* Add Product Dialog */}
      <Dialog open={addDialogOpen} onClose={() => setAddDialogOpen(false
      )}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          margin="dense"
          label="Image URL"
          fullWidth
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <TextField
          margin="dense"
          label="Thumbnail URL"
          fullWidth
          value={thumbnailUrl}
          onChange={(event) => setThumbnailUrl(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setAddDialogOpen(false)}>Cancel</Button>
        <Button onClick={handleAddProduct}>Add</Button>
      </DialogActions>
    </Dialog>

    {/* Edit Product Dialog */}
    {selectedProduct && (
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={selectedProduct.title}
            onChange={(event) =>
              setSelectedProduct({
                ...selectedProduct,
                title: event.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Image URL"
            fullWidth
            value={selectedProduct.url}
            onChange={(event) =>
              setSelectedProduct({
                ...selectedProduct,
                url: event.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Thumbnail URL"
            fullWidth
            value={selectedProduct.thumbnailUrl}
            onChange={(event) =>
              setSelectedProduct({
                ...selectedProduct,
                thumbnailUrl: event.target.value,
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleEditProduct}>Save</Button>
        </DialogActions>
      </Dialog>
    )}

    {/* Delete Product Dialog */}
    {selectedProduct && (
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{selectedProduct.title}"?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteProduct} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    )}

    {/* Snackbar */}
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={() => setSnackbarOpen(false)}
      message="Product updated"
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={() => setSnackbarOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      }
    />
  </Container>
);
}

export default ProducyList;
