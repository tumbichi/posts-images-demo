import React, { useEffect, useRef, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import debounce from 'just-debounce-it';
import Loader from 'react-loader-spinner';
import { requestPagePost, incrementPage } from '../../store/actions/post.actions';
import CardPost from '../../components/CardPost';
import { Container, ListContainer, LoaderContainer } from './styles';

const ListPostsLayout = ({ posts, pageNumber, navigateToPost, requestPagePost }) => {
  const theme = useTheme();
  const pageRef = useRef(pageNumber);
  const [loading, setLoading] = useState(true);
  
  const handleNextPage = useCallback(
    debounce(() => {
      setLoading(true);
      requestPagePost(pageRef.current);
    }, 1000),
    []
  );

  const hideLoading = () => {
    if (pageNumber > 1) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  };

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const handleScroll = () => {
    const wrappedElement = document.getElementById('bottom');
    if (isBottom(wrappedElement)) {
      handleNextPage();
      document.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    if (posts.length < 1) {
      requestPagePost(pageNumber, 30);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(
    function () {
      pageRef.current = pageNumber;
    },
    [pageNumber]
  );

  useEffect(() => {
    hideLoading();
  }, [posts]);

  const renderCardList = () =>
    posts.map(({ id, author, thumbnail_url }) => (
      <CardPost
        key={`CardPost${id}`}
        title={author}
        image={thumbnail_url}
        onClick={() => {
          navigateToPost(id);
        }}
      />
    ));

  return (
    <Container theme={theme}>
      <ListContainer onScroll={handleScroll}>{renderCardList()}</ListContainer>
      <LoaderContainer>
        {loading ? <Loader type="ThreeDots" color={theme.palette.primary.main} height={120} width={120} /> : null}
      </LoaderContainer>
      <div id="bottom" />
    </Container>
  );
};

const mapStateToProps = ({ post }) => {
  return {
    posts: post.posts,
    pageNumber: post.lastPage,
  };
};

const mapDispatchToProps = {
  requestPagePost,
  incrementPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPostsLayout);
