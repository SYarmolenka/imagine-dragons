export default ({ spacing }) => ({
  container: {
    maxWidth: spacing.unit * 120,
    background: '#262626',
    padding: [[0, spacing.unit * 2]],
    marginBottom: spacing.unit * 2,
  },
  video: {
    zIndex: 10,
  },

  videoOpts: {
    height: 390,
    width: 640,
    
  },

  videoContainer: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 390,
    width: 640,
  },

  spinner: {
    position: 'absolute',
    color: 'black',
  },

  title: {
    color: '#eee',
    margin: 'auto',
  }
});