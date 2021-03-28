import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeOnPagePost } from '../store/actions/config.action';
import PostInfoContainer from '../features/post-info-layout';

const PostPage = ({ changeOnPagePost }) => {
  const history = useHistory();
  const postId = history.location.pathname.replace('/post/', '');

  useEffect(() => {
    changeOnPagePost(true);

    return () => {
      changeOnPagePost(false);
    };
  });
  const goToHome = () => {
    history.push('/home');
  };
  return (
    <>
      <PostInfoContainer postId={postId} navigateToHome={goToHome} />
    </>
  );
};

const mapDispatchToProps = {
  changeOnPagePost,
};

export default connect(null, mapDispatchToProps)(PostPage);
