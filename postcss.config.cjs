module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                './src/pages/index.astro',
                './src/components/*.{js,jsx,ts,tsx,svelte,astro}',
                './src/modules/*.{js,jsx,ts,tsx,svelte,astro}',
                './src/layouts/*.{js,jsx,ts,tsx,svelte,astro}'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: 
                {
                    standard: ['random', 'yep', 'button', /^nav-/],
                    deep: ['about-me-more'],
                    greedy: [],
                    keyframes: [],
                    variables: [],
                }
                
                
        },
      },
  }