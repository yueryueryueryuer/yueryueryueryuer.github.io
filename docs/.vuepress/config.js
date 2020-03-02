module.exports = {
    // base: '/myBlog/',
    title: 'Learning',
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