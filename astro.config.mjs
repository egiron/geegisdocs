// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import starlightSidebarTopics from 'starlight-sidebar-topics';

// OJO!: La "base" debe ser bien seleccionada eg. ~ernestogiron/Test/geegisdocs/ y esta se debe utilizar completa en todos los enlaces para que funcione correctamente

// https://astro.build/config
export default defineConfig({
	site: 'https://egiron.github.io', //'http://localhost/', //
	base: 'geegisdocs', //'~ernestogiron/Test/geegisdocs/',
	// Ensure output is static, as GitHub Pages does not support SSR
  	output: 'static',
	integrations: [
		starlight({
			credits: false,
			favicon: './public/favicon.ico',
			lastUpdated: true,
			// title: 'GeoScience Notes',
			title: {
				en: 'GeoScience Notes',
				'es-CO': 'Mi Documentación',
			},
			// Establece el inglés como el idioma predeterminado para este sitio.
			defaultLocale: 'en',
			locales: {
				// Documentación en inglés en `src/content/docs/en/`
				en: { label: 'English', },
				es: { label: '🇪🇸 Español', lang: 'es-CO' },
			},
			logo: {
				src: './src/assets/logofundacionfarallones.png',
				    // light: './src/assets/light-logo.svg',
    				// dark: './src/assets/dark-logo.svg',
				// replacesTitle: true,
			},
			customCss: [
				// Ruta relativa a tu archivo CSS personalizado
				'./src/styles/custom.css',
			],
			// editLink: {
			// 	baseUrl: 'https://github.com/egiron/geegisdocs/edit/main/docs/',
			// },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/egiron' },
					{icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/egirone'},
					{icon: 'x.com', label: 'Twitter', href: 'https://x.com/egirongis'},
					{icon: 'youtube', label: 'Youtube', href: 'https://youtube.com/@egirongis'},
			],
			components: {
				TableOfContents: './src/components/TableOfContents.astro',
			},
			sidebar: [
				// Un solo elemento de enlace etiquetado como “Home”.
    			{ label: 'Home', link: '/' },
				{
					label: 'Guides',
					translations: {
						// en: 'Guides',
						'es-CO': 'Guías',
					},
					// Collapsa el grupo de forma predeterminada.
      				// collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						// { label: 'Example Guide', slug: 'guides/example' },
						{ slug: 'guides/example' },
						{ slug: 'guides/pasos' },
						{ slug: 'guides/guia' },
						{ slug: 'guides/maps' },
						// { label: 'Guía', slug: '../../pages/custompage.html' },
						// Un grupo anidado de enlaces para constelaciones estacionales.
						{
							label: 'Tiles',
							translations: {
								'es-CO': 'Cuadros',
							},
							collapsed: true,
							items: ['guides/pmtiles','guides/overture-maps-parquet','guides/subgrupo1', 'guides/subgrupo2'],
						},
					],
				},
				{
					label: 'Reference',
					translations: {
						'es-CO': 'Referencias',
					},
					collapsed: true,
					items: [
						{ autogenerate: { directory: 'reference' } },
						// { label: 'FAQs', slug: 'reference/faq' },
					],
				},
				// Un enlace externo al sitio web de la NASA.
    			{
					label: 'Resources',
					translations: {
						'es-CO': 'Recursos',
					},
					collapsed: true,
					items: [
						{
						label: 'NASA', 
						badge: {
							text: {
								en: 'Deprecated',
								'es-CO': 'Obsoleto',
							},
						},
						// badge: 'Obsoleto', 
						link: 'https://www.nasa.gov/',
						attrs: { target: '_blank', style: 'font-style: italic' },
						},
					],
				},
				{ label: 'egiron', link: 'https://egiron.github.io/', 
					badge: { text: 'New', variant: 'danger' },
					attrs: { target: '_blank', style: 'font-style: normal' },
				},
			],
		}),
	],
});
