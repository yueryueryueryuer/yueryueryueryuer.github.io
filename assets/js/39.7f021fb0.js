(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{398:function(t,a,s){"use strict";s.r(a);var r=s(27),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"软件开发模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件开发模型"}},[t._v("#")]),t._v(" 软件开发模型")]),t._v(" "),s("p",[t._v("随着技术的发展，软件的复杂度不断提高，需要遵循一定的开发方法才能取得成功，于是称这些模式化的开发方法为开发模型")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"瀑布模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#瀑布模型"}},[t._v("#")]),t._v(" 瀑布模型")]),t._v(" "),s("h3",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("瀑布模型就如同瀑布一样，从一个特定的阶段流向下一个阶段。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/系统架构设计师/开发方法/瀑布模型.png")}}),t._v(" "),s("p",[t._v("软件开发的阶段划分是明确的，一个阶段到下一个阶段有明显的界线。在每个阶段结束后，都会有固定的文档或源程序流入下一阶段。每一阶段都有回到前一阶段的反馈线，这指的是，在软件开发中当在后续阶段发现缺陷的时候，可以把这个缺陷反馈到上一阶段进行修正。")]),t._v(" "),s("p",[s("strong",[s("em",[t._v("瀑布 V 模型")])]),t._v("：是瀑布模型的一种变体")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/系统架构设计师/开发方法/瀑布V模型.png")}}),t._v(" "),s("p",[t._v("整个瀑布模型在编码与调试阶段转了个弯，形成了一个对称的 V 字。需求分析还有一条虚线指向系统测试。这指的是，需求分析的结果将作为系统测试的准则，即需求分析阶段也将产生同软件需求一致的系统测试")]),t._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("在瀑布模型中，需求分析阶段是一切活动的基础，设计、实现和验证活动都是从需求分析阶段的结果导出的。一旦需求分析的结果不完全正确，存在偏差，那么后续的活动只能放大这个偏差，在错误的道路上越走越远。")]),t._v(" "),s("li",[t._v("瀑布模型难以适应变化。在瀑布模型中精确地定义了每一个阶段的活动和活动结果，而每一阶段都紧密依赖于上一阶段的结果。如果在软件的后期出现了需求的变化，整个系统又要从头开始。")]),t._v(" "),s("li",[t._v("使用瀑布模型意味着当所有阶段都结束才能最终交付软件产品，所以在提出需求后需要相当长一段时间的等待才能够看到最终结果，才能发现软件产品究竟能不能够满足客户的需求。")]),t._v(" "),s("li",[t._v("文档驱动型的瀑布模型除了制造出软件产品外还将产生一大堆的文档，大部分的文档对客户没有任何意义，但完成这些对客户没有意义的文档却需要花费大量的人力。所以瀑布模型也是一种重载过程。")])]),t._v(" "),s("h3",{attrs:{id:"适用性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用性"}},[t._v("#")]),t._v(" 适用性")]),t._v(" "),s("p",[t._v("当软件需求明确、稳定时，可以采用瀑布模型按部就班地开发软件，当软件需求不明确或变动剧烈时，瀑布模型中往往要到测试阶段才会暴露出需求的缺陷，造成后期修改代价太大，难以控制开发的风险。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"演化模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演化模型"}},[t._v("#")]),t._v(" 演化模型")]),t._v(" "),s("p",[t._v("演化模型可以看做若干次瀑布模型的迭代，当完成一个瀑布模型后，重新进入下一个迭代周期，软件在这样的迭代过程中得以演化、完善。根据不同的迭代特点，演化模型可以演变为螺旋模型、增量模型和原型法开发。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"螺旋模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#螺旋模型"}},[t._v("#")]),t._v(" 螺旋模型")]),t._v(" "),s("h3",{attrs:{id:"介绍-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍-2"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("螺旋模型将瀑布模型和演化模型结合起来，不仅体现了两个模型的优点，而且还强调了其他模型均忽略了的风险分析。螺旋模型的每一周期都包括需求定义、风险分析、工程实现和评审 4 个阶段，由这 4 个阶段进行迭代，软件开发过程每迭代一次，软件开发就前进一 个层次。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/系统架构设计师/开发方法/螺旋模型.png")}}),t._v(" "),s("p",[t._v("螺旋模型的基本做法是在“瀑布模型”的每一个开发阶段前，引入一个非常严格的风险识别、风险分析和风险控制。")]),t._v(" "),s("h3",{attrs:{id:"缺点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("h3",{attrs:{id:"适用性-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用性-2"}},[t._v("#")]),t._v(" 适用性")]),t._v(" "),s("p",[t._v("螺旋模型强调风险分析，使得开发人员和用户对每个演化层出现的风险都有所了解，继而做出应有的反应。因此，螺旋模型特别适用于庞大而复杂、具有高风险的系统。")])])}),[],!1,null,null,null);a.default=v.exports}}]);