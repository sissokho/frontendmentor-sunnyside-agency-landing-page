module.exports = {
    content: ['./index.html'],
    theme: {
        colors: {
            red: 'hsl(7, 99%, 70%)',
            yellow: 'hsl(51, 100%, 49%)',
            cyan: {
                'dark-desaturated': 'hsl(167, 40%, 24%)',
                'dark-moderate': 'hsl(168, 34%, 41%)',
            },
            blue: {
                grayish: 'hsl(210, 4%, 67%)',
                'dark-grayish': 'hsl(232, 10%, 55%)',
                'very-dark-grayish': 'hsl(213, 9%, 39%)',
                'dark-desaturated': 'hsl(212, 27%, 19%)',
                dark: 'hsl(198, 62%, 26%)',
            },
            white: 'hsl(0, 0%, 100%)',
        },
        fontFamily: {
            barlow: ['Barlow', 'sans-serif'],
            fraunces: ['Fraunces', 'serif'],
        },
        fontWeight: {
            semibold: '600',
            bold: '700',
            black: '900',
        },
        extend: {},
    },
    plugins: [],
};
