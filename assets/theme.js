;(() => {
	const v = localStorage.getItem('color-scheme')
	const a = window.matchMedia('(prefers-color-scheme: dark)').matches
	const cl = document.documentElement.classList
	const setColorScheme = (v) =>
		(!v || v === 'auto' ? a : v === 'dark') ? cl.add('dark') : cl.remove('dark')
	setColorScheme(v)
	window.setColorScheme = (v) => {
		setColorScheme(v)
		localStorage.setItem('color-scheme', v)
	}
	window.toggleColorScheme = () => {
		const cl = document.documentElement.classList
		const currentScheme = cl.contains('dark') ? 'light' : 'dark'
		cl.toggle('dark')
		localStorage.setItem('color-scheme', currentScheme)
	}
})()
