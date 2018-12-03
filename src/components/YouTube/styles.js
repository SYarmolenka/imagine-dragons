export default ({ spacing }) => ({
  container: {
    maxWidth: spacing.unit * 120,
    background: '#262626',
    padding: [[0, spacing.unit * 2]],
    margin: [[0, spacing.unit, spacing.unit * 2, spacing.unit]],
  },

  video: {
    zIndex: 10,
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
    margin: [[spacing.unit * 2, 0]],
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