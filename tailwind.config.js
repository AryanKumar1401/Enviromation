module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  darkMode: false,
  theme: {
		extend: {
			backgroundImage: theme => ({
				'forrest': "url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80')",
			})
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
