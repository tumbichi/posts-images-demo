import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ListImagesContainer from '../features/list-images-layout';
import NavigationDrawerContainer from '../features/navigation-drawer-layout';

const HomePage = ({ username }) => {
  const history = useHistory();

  useEffect(() => {
    if (!username) {
      history.push('/');
    }
  }, [username]);

  const goToPost = (post) => {
    history.push(`/post/${post}`);
  };

  return (
    <>
      <NavigationDrawerContainer />
      <ListImagesContainer navigateToPost={goToPost} />
    </>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    username: user.name,
  };
};

export default connect(mapStateToProps)(HomePage);
