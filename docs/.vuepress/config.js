const moment = require('moment');
module.exports = {
    base: '/',
    title: 'Learning',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/192.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/logo.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    description: '个人小站',
    port: '8080',
    // 插件
    plugins: {
        // 时间戳格式化
        '@vuepress/last-updated': {
            transformer: (timestamp) => moment(timestamp).format("YYYY-MM-DD HH:mm:ss")
        },
        // 返回顶部
        '@vuepress/back-to-top': true,
        // 谷歌分析
        '@vuepress/google-analytics': {
            'ga': 'UA-188257966-1'
        },
        // 图片放大
        '@vuepress/medium-zoom': {
            selector: 'img'
        },
        // pwa
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }
    },
    themeConfig: {
        sidebarDepth: 2,
        logo: '/img/logo.png',
        lastUpdated: '上次更新',
        nav: [
            {
                text: '服务端',
                items: [{
                    text: 'Java',
                    link: '/server/java/'
                }, {
                    text: 'Golang',
                    link: '/server/golang/'
                }, {
                    text: 'MySQL',
                    link: '/server/mysql/'
                }, {
                    text: 'Linux',
                    link: '/server/linux/'
                }, {
                    text: 'Docker',
                    link: '/server/docker/'
                }]
            },
            {
                text: '前端',
                items: [{
                    text: 'npm 与 yarn',
                    link: '/front/npm_and_yarn/'
                }]
            },
            {
                text: '软考',
                items: [{
                    text: '系统架构设计师',
                    link: '/软考/系统架构设计师/'
                },
                {
                    text: '信息系统项目管理师',
                    link: '/软考/信息系统项目管理师/'
                }
                ]
            },
            {
                text: '网络安全',
                link: '/网络安全/网络安全知识/网络安全基础知识'
                // items: [{
                //     text: '网络安全知识',
                //     link: '/网络安全/网络安全知识/网络安全基础知识'
                // },
                // {
                //     text: 'CTF',
                //     link: '/网络安全/ctf/kali'
                // }
                // ]
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
                    text: 'Mac Time Machine',
                    link: '/items/mac_timemachine/'
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
                },
                {
                    text: '奇怪问题',
                    items: [{
                        text: 'macOS Big Sur L2TP VPN 连不上',
                        link: '/items/magic_problem/bigsur_l2tp'
                    },
                    {
                        text: '无法启动 Parallels Desktop',
                        link: '/items/magic_problem/parallels_desktop_15'
                    }]
                }
                ]
            },
            {
                text: 'GitHub',
                link: 'https://github.com/yueryueryueryuer/yueryueryueryuer.github.io'
            },
        ],
        sidebar: {
            '/server/java/': [{
                title: 'Stream',
                collapsable: false,
                children: [{
                    title: 'Stream 详解',
                    path: '/server/java/stream/stream'
                },
                {
                    title: '常用 Stream',
                    path: '/server/java/stream/stream_commonly'
                }
                ]
            },
            {
                title: 'Optional',
                collapsable: false,
                children: [{
                    title: 'Optional 详解',
                    path: '/server/java/optional/optional'
                },
                {
                    title: '常用 Optional',
                    path: '/server/java/optional/optional_commonly'
                }
                ]
            }
            ],
            '/server/golang/': [{
                title: 'Golang 学习路线',
                path: '/server/golang/learning'
            }],
            '/server/mysql/': [{
                title: 'MySQL 时区配置',
                path: '/server/mysql/date'
            }],
            '/server/linux/': [{
                title: '文件操作',
                path: '/server/linux/disk'
            },
            {
                title: '常用命令',
                path: '/server/linux/command'
            },
            {
                title: 'firewall',
                path: '/server/linux/firewall'
            },
            {
                title: '时间和时区',
                path: '/server/linux/date'
            }
            ],
            '/server/docker/': [{
                title: 'Docker 安装',
                path: '/server/docker/docker_install'
            },
            {
                title: 'Docker 常用命令',
                path: '/server/docker/docker_use'
            },
            {
                title: 'Docker 安装 MySQL 5.7',
                path: '/server/docker/docker_mysql5.7'
            }
            ],
            '/软考/系统架构设计师/': [
                // {
                //     title: '计算机组成与体系结构',
                //     children: [{
                //         title: '计算机组成与体系结构',
                //         path: '/系统架构设计师/计算机组成与体系结构/'
                //     }]
                // }, 
                {
                    title: '操作系统',
                    children: [{
                        title: '操作系统的类型与结构',
                        path: '/软考/系统架构设计师/操作系统/操作系统的类型与结构'
                    },
                    {
                        title: '操作系统基本原理',
                        path: '/软考/系统架构设计师/操作系统/操作系统基本原理'
                    }
                    ]
                },
                // {
                //     title: '数据库',
                //     children: [{
                //         title: '数据库',
                //         path: '/软考/系统架构设计师/数据库'
                //     }]
                // }, {
                //     title: '计算机网络',
                //     children: [{
                //         title: '计算机网络',
                //         path: '/软考/系统架构设计师/计算机网络'
                //     }]
                // }, {
                //     title: '系统性能与评价',
                //     children: [{
                //         title: '系统性能与评价',
                //         path: '/软考/系统架构设计师/系统性能与评价'
                //     }]
                // }, 
                {
                    title: '开发方法',
                    children: [{
                        title: '软件生命周期',
                        path: '/软考/系统架构设计师/开发方法/软件生命周期'
                    },
                    {
                        title: '软件开发模型',
                        path: '/软考/系统架构设计师/开发方法/软件开发模型'
                    },
                    {
                        title: '统一过程',
                        path: '/软考/系统架构设计师/开发方法/统一过程'
                    },
                    {
                        title: '敏捷方法',
                        path: '/软考/系统架构设计师/开发方法/敏捷方法'
                    },
                    {
                        title: '软件重用',
                        path: '/软考/系统架构设计师/开发方法/软件重用'
                    },
                    {
                        title: '基于架构的软件设计',
                        path: '/软考/系统架构设计师/开发方法/基于架构的软件设计'
                    },
                    {
                        title: '形式化方法',
                        path: '/软考/系统架构设计师/开发方法/形式化方法'
                    }
                    ]
                },
                //  {
                //     title: '系统规划',
                //     children: [{
                //         title: '系统规划',
                //         path: '/软考/系统架构设计师/系统规划'
                //     }]
                // }, {
                //     title: '系统分析与设计方法',
                //     children: [{
                //         title: '系统分析与设计方法',
                //         path: '/软考/系统架构设计师/系统分析与设计方法'
                //     }]
                // }, {
                //     title: '软件架构设计',
                //     children: [{
                //         title: '软件架构设计',
                //         path: '/软考/系统架构设计师/软件架构设计'
                //     }]
                // }, {
                //     title: '设计模式（23种）',
                //     children: [{
                //         title: '设计模式（23种）',
                //         path: '/软考/系统架构设计师/设计模式（23种）'
                //     }]
                // }, {
                //     title: '测试评审方法',
                //     children: [{
                //         title: '测试评审方法',
                //         path: '/软考/系统架构设计师/测试评审方法'
                //     }]
                // }, {
                //     title: '嵌入式系统设计',
                //     children: [{
                //         title: '嵌入式系统设计',
                //         path: '/软考/系统架构设计师/嵌入式系统设计'
                //     }]
                // }, {
                //     title: '开发管理',
                //     children: [{
                //         title: '开发管理',
                //         path: '/软考/系统架构设计师/开发管理'
                //     }]
                // }, {
                //     title: '信息系统',
                //     children: [{
                //         title: '信息系统',
                //         path: '/软考/系统架构设计师/信息系统'
                //     }]
                // }, {
                //     title: '基于中间件的开发',
                //     children: [{
                //         title: '基于中间件的开发',
                //         path: '/软考/系统架构设计师/基于中间件的开发'
                //     }]
                // }, {
                //     title: '系统安全',
                //     children: [{
                //         title: '系统安全',
                //         path: '/软考/系统架构设计师/系统安全'
                //     }]
                // }, {
                //     title: '系统的可靠性分析与设计',
                //     children: [{
                //         title: '系统的可靠性分析与设计',
                //         path: '/软考/系统架构设计师/系统的可靠性分析与设计'
                //     }]
                // }, {
                //     title: '软件知识产权与法律法规',
                //     children: [{
                //         title: '软件知识产权与法律法规',
                //         path: '/软考/系统架构设计师/软件知识产权与法律法规'
                //     }]
                // }, {
                //     title: '标准化知识',
                //     children: [{
                //         title: '标准化知识',
                //         path: '/软考/系统架构设计师/标准化知识'
                //     }]
                // }, {
                //     title: '应用数学',
                //     children: [{
                //         title: '应用数学',
                //         path: '/软考/系统架构设计师/应用数学'
                //     }]
                // }, {
                //     title: '虚拟化、云计算、物联网',
                //     children: [{
                //         title: '虚拟化、云计算、物联网',
                //         path: '/软考/系统架构设计师/虚拟化、云计算、物联网'
                //     }]
                // }
            ],
            '/软考/信息系统项目管理师/': [

            ],
            '/网络安全/': [{
                title: '网络安全知识',
                // collapsable: false,
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
                // collapsable: false,
                children: [{
                    title: 'CTF 基础知识',
                    path: '/网络安全/ctf/ctf基础知识'
                },
                {
                    title: 'Parallels Desktop 安装 kali 和基础配置',
                    path: '/网络安全/ctf/kali'
                }]
            }],
            '/items/': [{
                title: 'Emoji',
                path: '/items/emoji'
            }, {
                title: 'Markdown',
                path: '/items/markdown'
            }, {
                title: 'mac Time Machine',
                path: '/items/mac_timemachine'
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
            }, {
                title: '奇怪问题',
                collapsable: false,
                children: [{
                    title: 'macOS Big Sur L2TP VPN 连不上',
                    path: '/items/magic_problem/bigsur_l2tp'
                },
                {
                    title: '无法启动 Parallels Desktop',
                    path: '/items/magic_problem/parallels_desktop_15'
                }]
            }],
        }
    }
}