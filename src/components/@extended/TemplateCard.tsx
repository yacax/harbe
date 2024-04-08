import React from 'react';
import { useDispatch } from 'react-redux';
import { addSnackbarInfo } from '../../redux/snackbarInfo/snackbarInfoSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  imageLink: string;
  downloadLink?: string;
  title: string;
  description: string;
  imageAspectRatio?: number;
};

export default function TemplateCard({
  imageLink,
  downloadLink,
  title,
  description,
  imageAspectRatio = 4 / 3,
}: Props) {
  const dispatch = useDispatch();

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: description,
          url: window.location.href,
        })
        .then(() =>
          dispatch(
            addSnackbarInfo({
              message: 'Shared successfully!',
              severity: 'success',
            })
          )
        )
        .catch((error) =>
          dispatch(
            addSnackbarInfo({
              message: `Error sharing: ${error}`,
              severity: 'error',
            })
          )
        );
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          dispatch(
            addSnackbarInfo({
              message: 'Link copied to clipboard!',
              severity: 'info',
            })
          );
        })
        .catch((err) => {
          dispatch(
            addSnackbarInfo({
              message: `Error copying link to clipboard: ${err}`,
              severity: 'error',
            })
          );
        });
    }
  };

  const paddingTop = `${(1 / imageAspectRatio) * 100}%`;

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{
          height: 0,
          paddingTop: { paddingTop },
          backgroundSize: 'cover',
        }}
        image={imageLink}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {downloadLink && (
          <a href={downloadLink} download style={{ textDecoration: 'none' }}>
            <Button size="small">download</Button>
          </a>
        )}
        <Button size="small" onClick={handleShare}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
