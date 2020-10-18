import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Container, Image, InfoContainer, TextWrapper, TopContainer, Tooltip, LoaderContainer } from './styles';
import Button from '../../components/Button';
import Dialog from '../../components/Dialog';
import { changeDimensionToImageURL, downloadImage } from '../../utils/helpers';
import { locale } from '../../constants';

const PostInfoLayout = ({ postId, posts, navigateToHome }) => {
  const theme = useTheme();
  const strings = locale();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dialogShow, setDialogShow] = useState(false);

  useEffect(() => {
    const currentPost = posts.find((post) => post.id === postId);

    setTimeout(() => {
      if (currentPost) {
        setPost({
          ...currentPost,
          small_image: changeDimensionToImageURL(currentPost.download_url, 0.2),
          medium_image: changeDimensionToImageURL(currentPost.download_url, 0.5),
          large_image: changeDimensionToImageURL(currentPost.download_url, 0.8),
        });
        setLoading(false);
      }
    }, 200);
  }, []);

  const handleDialogClose = () => {
    setDialogShow(false);
  };

  const handleImageDownload = (url) => {
    downloadImage(url);
  };

  if (posts.length < 1) {
    navigateToHome();
  }

  return (
    <>
      {loading ? (
        <LoaderContainer>
          <Loader type="ThreeDots" color={theme.palette.primary.main} height={120} width={120} />
        </LoaderContainer>
      ) : (
        <Container>
          <Dialog title={strings.info.download} open={dialogShow} handleClose={handleDialogClose}>
            <Tooltip title={`${post.small_image.width}x${post.small_image.height}`} arrow>
              <Link target="_blank" to={post.small_image.url} style={{ textDecoration: 'none' }}>
                <Button
                  variant="text"
                  text="Small"
                  size="small"
                  onClick={() => handleImageDownload(post.small_image.url)}
                />
              </Link>
            </Tooltip>
            <Tooltip title={`${post.medium_image.width}x${post.medium_image.height}`} arrow>
              <div>
                <Link target="_blank" to={post.medium_image.url} style={{ textDecoration: 'none' }}>
                  <Button
                    variant="text"
                    text="Medium"
                    size="small"
                    onClick={() => handleImageDownload(post.medium_image.url)}
                  />
                </Link>
              </div>
            </Tooltip>
            <Tooltip title={`${post.large_image.width}x${post.large_image.height}`} arrow>
              <Link target="_blank" to={post.large_image.url} style={{ textDecoration: 'none' }}>
                <Button
                  variant="text"
                  text="Large"
                  size="small"
                  onClick={() => handleImageDownload(post.large_image.url)}
                />
              </Link>
            </Tooltip>
            <Tooltip title={`${post.width}x${post.height}`} arrow>
              <Link target="_blank" to={post.download_url} style={{ textDecoration: 'none' }}>
                <Button
                  variant="text"
                  text="Original"
                  size="small"
                  onClick={() => handleImageDownload(post.download_url)}
                />
              </Link>
            </Tooltip>
          </Dialog>
          <TopContainer>
            <TextWrapper>
              <Typography color="textPrimary" variant="overline">
                {strings.info.author}
              </Typography>
              <Typography color="textPrimary" align="inherit" variant="h5">
                {post.author}
              </Typography>
            </TextWrapper>
            <Button
              height="40px"
              text="Descargar"
              onClick={() => {
                setDialogShow(true);
              }}
            />
          </TopContainer>
          <Image
            style={{
              backgroundImage: `url(${post.thumbnail_url})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <InfoContainer theme={theme}>
            <TextWrapper>
              <Typography color="textPrimary" variant="overline">
                {strings.info.width}
              </Typography>
              <Typography color="textPrimary" align="inherit" variant="h4">
                {post.width}
              </Typography>
            </TextWrapper>
            <TextWrapper>
              <Typography color="textPrimary" variant="overline">
                {strings.info.height}
              </Typography>
              <Typography color="textPrimary" align="inherit" variant="h4">
                {post.height}
              </Typography>
            </TextWrapper>
          </InfoContainer>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = ({ post }) => {
  return {
    posts: post.posts,
  };
};

export default connect(mapStateToProps)(PostInfoLayout);
