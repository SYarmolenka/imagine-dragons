export default ({ spacing }) => ({
  menuItem: {
    height: spacing.unit * 7,
    '&:hover': {
      background: 'rgba(200,200,200, 0.05)',
      '& $imageContainer': {
        boxShadow: [[0, 0, 5, 5, 'rgba(200,200,200, 0.7)']],
      },
      '& $title': {
        color: '#eee',
      }
    }
  },

  imageContainer: {
    borderRadius: spacing.unit * 4,
    overflow: 'hidden',
    margin: spacing.unit * 2,
  },

  image: {
    width: spacing.unit * 8,
    height: spacing.unit * 8,
  },

  link: {
    textDecoration: 'none',
  },

  title: {
    color: '#bababa',
  },

  activeLink: { 
    '& $imageContainer': {
      boxShadow: [[0, 0, 5, 5, 'rgba(200,200,200, 0.7)']],
    },
    '& $title': {
      color: '#eee',
    }
  }
})