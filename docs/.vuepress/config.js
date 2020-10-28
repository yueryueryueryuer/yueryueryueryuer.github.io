module.exports = {
    base: '/my-blog/',
    title: 'Learning',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    description: '个人小站',
    port: '8080',
    themeConfig: {
        sidebarDepth: 2,
        logo: '/img/logo.png',
        lastUpdated: '上次更新',
        nav: [{
                text: 'Java',
                link: '/java/'
            },
            {
                text: 'Golang',
                link: '/golang/'
            },
            {
                text: 'Linux',
                link: '/linux/'
            },
            {
                text: '技术栈',
                items: [{
                    text: 'Docker',
                    link: '/stack/docker/'
                }]
            },
            {
                text: '系统架构设计师',
                link: '/系统架构设计师/'
            },
            {
                text: '网络安全',
                items: [{
                        text: '网络安全知识',
                        link: '/网络安全/网络安全知识/网络安全基础知识'
                    },
                    {
                        text: 'CTF',
                        link: '/网络安全/ctf/kali'
                    }
                ]
            },
            {
                text: '杂项',
                items: [{
                        text: 'Emoji',
                        link: '/items/emoji/'
                    },
                    {
                        text: 'Markdown',
                        link: '/items/markdown/'
                    },
                    {
                        text: '常用对照表',
                        items: [{
                            text: 'Html 常用字符转义',
                            link: '/items/compare/compare_html'
                        }, {
                            text: 'Mybatis 转义',
                            link: '/items/compare/compare_mybatis'
                        }, {
                            text: 'RGB 颜色对照',
                            link: '/items/compare/compare_rgb'
                        }]
                    }
                ]
            },
            {
                text: 'GitHub',
                link: 'https://github.com/yueryueryueryuer/my-blog'
            },
        ],
        sidebar: {
            '/java/': [{
                    title: 'Stream',
                    collapsable: false,
                    children: [{
                            title: 'Stream 详解',
                            path: '/java/stream/stream'
                        },
                        {
                            title: '常用 Stream',
                            path: '/java/stream/stream_commonly'
                        }
                    ]
                },
                {
                    title: 'Optional',
                    collapsable: false,
                    children: [{
                            title: 'Optional 详解',
                            path: '/java/optional/optional'
                        },
                        {
                            title: '常用 Optional',
                            path: '/java/optional/optional_commonly'
                        }
                    ]
                }
            ],
            '/golang/': [{
                title: 'Golang 学习路线',
                path: '/golang/learning'
            }],
            '/linux/': [{
                    title: '文件操作',
                    path: '/linux/disk'
                },
                {
                    title: '常用命令',
                    path: '/linux/command'
                }
            ],
            '/stack/docker/': [{
                    title: 'Docker 安装',
                    path: '/stack/docker/docker_install'
                },
                {
                    title: 'Docker 常用命令',
                    path: '/stack/docker/docker_use'
                },
                {
                    title: 'Docker 安装 MySQL 5.7',
                    path: '/stack/docker/docker_mysql5.7'
                }
            ],
            '/系统架构设计师/': [{
                title: '操作系统',
                collapsable: false,
                children: [{
                        title: '操作系统的类型与结构',
                        path: '/系统架构设计师/操作系统/操作系统的类型与结构'
                    },
                    {
                        title: '操作系统基本原理',
                        path: '/系统架构设计师/操作系统/操作系统基本原理'
                    }
                ]
            }, {
                title: '开发方法',
                collapsable: false,
                children: [{
                        title: '软件生命周期',
                        path: '/系统架构设计师/开发方法/软件生命周期'
                    },
                    {
                        title: '软件生命周期',
                        path: '/系统架构设计师/开发方法/软件开发模型'
                    },
                    {
                        title: '软件生命周期',
                        path: '/系统架构设计师/开发方法/统一过程'
                    },
                    {
                        title: '软件生命周期',
                        path: '/系统架构设计师/开发方法/敏捷方法'
                    },
                    {
                        title: '软件生命周期',
                        path: '/系统架构设计师/开发方法/软件重用'
                    },
                    {
                        title: '软件生命周期',
                        path: '/系统架构设计师/开发方法/基于架构的软件设计'
                    },
                    {
                        title: '软件生命周期',
                        path: '/系统架构设计师/开发方法/形式化方法'
                    }
                ]
            }],
            '/网络安全/': [{
                title: '网络安全',
                collapsable: false,
                children: [{
                    title: '网络安全知识',
                    path: '/网络安全/网络安全知识/网络安全基础知识'
                }, {
                    title: '网络攻击与防御',
                    path: '/网络安全/网络安全知识/网络攻击与防御'
                }, {
                    title: '信息安全',
                    path: '/网络安全/网络安全知识/信息安全'
                }]
            }, {
                title: 'CTF',
                collapsable: false,
                children: [
                    //     {
                    //     title: 'CTF 基础知识',
                    //     path: '/网络安全/ctf/ctf基础知识'
                    // }, 
                    {
                        title: 'Parallels Desktop 安装 kali 和基础配置',
                        path: '/网络安全/ctf/kali'
                    }
                ]
            }],
            '/items/': [{
                title: 'Emoji',
                path: '/items/emoji'
            }, {
                title: 'Markdown',
                path: '/items/markdown'
            }, {
                title: '常用对照表',
                collapsable: false,
                children: [{
                        title: 'Html 常用字符转义',
                        path: '/items/compare/compare_html'
                    }, {
                        title: 'Mybatis 转义',
                        path: '/items/compare/compare_mybatis'
                    }, {
                        title: 'RGB 颜色对照',
                        path: '/items/compare/compare_rgb'
                    },

                ]
            }],
        }
    }
}