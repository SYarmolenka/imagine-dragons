export default ({ spacing }) => ({
  '@global': {
    body: {
      margin: 0,
    }
  },

  menuOpen: {
    width: spacing.unit * 45,
    transition: [
      ['width', 'cubic-bezier(0, 0, 0.2, 1)', '225ms']
    ],
  },

  menuClose: {
    width: spacing.unit * 12,
    transition: [
      ['width', 'cubic-bezier(0, 0, 0.2, 1)', '225ms']
    ],
  },

  paper: {
    marginTop: 64,
    background: '#202020',
  },

  title: {
    color: '#bababa',
    '&:nth-child(n + 2)': {
      marginTop: spacing.unit * 3,
    }
  },

  divider: {
    background: '#bababa',
    marginTop: spacing.unit,
    marginBottom: spacing.unit,
  }
});
