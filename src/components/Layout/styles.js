import backgroundImage from '../../images/backgroundRoot.jpg';

export default {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: [[64, 0, 0, 72]],
    background: `url(${backgroundImage}) no-repeat`,
    backgroundSize: 'cover',
    height: `calc(100vh - 64px)`,
  }
};
