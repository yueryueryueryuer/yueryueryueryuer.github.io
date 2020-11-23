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
                        text: 'Mac Time Machine',
                        link: '/items/mac_timemachine/'
                    },
                    {
                        text: '奇怪问题',
                        link: '/items/magic_problem/'
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
                },
                {
                    title: 'firewall',
                    path: '/linux/firewall'
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
                title: '计算机组成原理',
                children: [{
                    title: '计算机组成原理',
                    path: '/系统架构设计师/计算机组成原理'
                }]
            }, {
                title: '操作系统',
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
                title: '数据库',
                children: [{
                    title: '数据库',
                    path: '/系统架构设计师/数据库'
                }]
            }, {
                title: '计算机网络',
                children: [{
                    title: '计算机网络',
                    path: '/系统架构设计师/计算机网络'
                }]
            }, {
                title: '系统性能与评价',
                children: [{
                    title: '系统性能与评价',
                    path: '/系统架构设计师/系统性能与评价'
                }]
            }, {
                title: '开发方法',
                children: [{
                        title: '软件生命周期',
                        path: '/系统架构设计师/开发方法/软件生命周期'
                    },
                    {
                        title: '软件开发模型',
                        path: '/系统架构设计师/开发方法/软件开发模型'
                    },
                    {
                        title: '统一过程',
                        path: '/系统架构设计师/开发方法/统一过程'
                    },
                    {
                        title: '敏捷方法',
                        path: '/系统架构设计师/开发方法/敏捷方法'
                    },
                    {
                        title: '软件重用',
                        path: '/系统架构设计师/开发方法/软件重用'
                    },
                    {
                        title: '基于架构的软件设计',
                        path: '/系统架构设计师/开发方法/基于架构的软件设计'
                    },
                    {
                        title: '形式化方法',
                        path: '/系统架构设计师/开发方法/形式化方法'
                    }
                ]
            }, {
                title: '系统规划',
                children: [{
                    title: '系统规划',
                    path: '/系统架构设计师/系统规划'
                }]
            }, {
                title: '系统分析与设计方法',
                children: [{
                    title: '系统分析与设计方法',
                    path: '/系统架构设计师/系统分析与设计方法'
                }]
            }, {
                title: '软件架构设计',
                children: [{
                    title: '软件架构设计',
                    path: '/系统架构设计师/软件架构设计'
                }]
            }, {
                title: '设计模式（23种）',
                children: [{
                    title: '设计模式（23种）',
                    path: '/系统架构设计师/设计模式（23种）'
                }]
            }, {
                title: '测试评审方法',
                children: [{
                    title: '测试评审方法',
                    path: '/系统架构设计师/测试评审方法'
                }]
            }, {
                title: '嵌入式系统设计',
                children: [{
                    title: '嵌入式系统设计',
                    path: '/系统架构设计师/嵌入式系统设计'
                }]
            }, {
                title: '开发管理',
                children: [{
                    title: '开发管理',
                    path: '/系统架构设计师/开发管理'
                }]
            }, {
                title: '信息系统',
                children: [{
                    title: '信息系统',
                    path: '/系统架构设计师/信息系统'
                }]
            }, {
                title: '基于中间件的开发',
                children: [{
                    title: '基于中间件的开发',
                    path: '/系统架构设计师/基于中间件的开发'
                }]
            }, {
                title: '系统安全',
                children: [{
                    title: '系统安全',
                    path: '/系统架构设计师/系统安全'
                }]
            }, {
                title: '系统的可靠性分析与设计',
                children: [{
                    title: '系统的可靠性分析与设计',
                    path: '/系统架构设计师/系统的可靠性分析与设计'
                }]
            }, {
                title: '软件知识产权与法律法规',
                children: [{
                    title: '软件知识产权与法律法规',
                    path: '/系统架构设计师/软件知识产权与法律法规'
                }]
            }, {
                title: '标准化知识',
                children: [{
                    title: '标准化知识',
                    path: '/系统架构设计师/标准化知识'
                }]
            }, {
                title: '应用数学',
                children: [{
                    title: '应用数学',
                    path: '/系统架构设计师/应用数学'
                }]
            }, {
                title: '虚拟化、云计算、物联网',
                children: [{
                    title: '虚拟化、云计算、物联网',
                    path: '/系统架构设计师/虚拟化、云计算、物联网'
                }]
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
                title: 'mac Time Machine',
                path: '/items/mac_timemachine'
            }, {
                title: '奇怪问题',
                path: '/items/magic_problem'
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