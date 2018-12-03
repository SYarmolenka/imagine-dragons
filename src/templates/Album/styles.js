export default ({ spacing }) => ({
  container: {
    maxWidth: spacing.unit * 120,
    margin: [[spacing.unit * 10, 'auto']],
    background: '#202020',
    color: '#eee',
    padding: spacing.unit * 5,
  },

  imageContainer: {
    overflow: 'hidden',
  },

  image: {
    width: spacing.unit * 50,
    height: spacing.unit * 50,
  },

  title: {
    margin: 'auto',
  },

  description: {
    margin: [[spacing.unit * 3, 0]]
  },

  songs: {
    margin: [[spacing.unit * 3, 0]]
  }
});
