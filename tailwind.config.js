module.exports = {
  purge: [],
  theme: {
    extend: {
		boxShadow: {
			cool: '4px 4px 0 0 rgb(180, 198, 252), 8px 8px 0 0 rgb(104, 117, 245), 12px 12px 0 0 rgb(81, 69, 205), -4px 4px 0 0 rgb(180, 198, 252), -8px 8px 0 0 rgb(104, 117, 245), -12px 12px 0 0 rgb(81, 69, 205), -4px -4px 0 0 rgb(180, 198, 252), -8px -8px 0 0 rgb(104, 117, 245), -12px -12px 0 0 rgb(81, 69, 205), 4px -4px 0 0 rgb(180, 198, 252), 8px -8px 0 0 rgb(104, 117, 245), 12px -12px 0 0 rgb(81, 69, 205)'
		}
	},
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
