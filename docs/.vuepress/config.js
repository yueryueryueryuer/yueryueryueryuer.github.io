module.exports = {
    base: '/my-blog/',
    title: 'Learning',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/favicon.ico'
        }]
    ],
    description: '学习小站',
    port: '8080',
    themeConfig: {
        logo: '/img/logo.png',
        sidebar: [{
                title: 'Java',
                collapsable: false,
                children: [
                    '/java/stream'
                ]
            },
            {
                title: 'Linux',
                collapsable: false,
                children: [
                    '/linux/base64'
                ]
            },
            {
                title: '杂项',
                collapsable: false,
                children: [
                    '/items/markdown',
                    '/items/emoji',
                    '/items/compare',
                    '/items/development',
                ]
            }
        ]
    }
}