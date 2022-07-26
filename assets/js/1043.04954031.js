(window.webpackJsonp=window.webpackJsonp||[]).push([[1043],{1418:function(t,v,_){"use strict";_.r(v);var a=_(26),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"线程生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线程生命周期"}},[t._v("#")]),t._v(" 线程生命周期")]),t._v(" "),_("h2",{attrs:{id:"_1-线程的生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-线程的生命周期"}},[t._v("#")]),t._v(" 1. 线程的生命周期")]),t._v(" "),_("p",[t._v("Java 线程在运行的生命周期中的指定时刻只可能处于下面6种不同状态的其中一个状态")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("状态名称")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("NEW")]),t._v(" "),_("td",[t._v("初始状态，线程被构建，但是还没调用start方法")])]),t._v(" "),_("tr",[_("td",[t._v("RUNNABLE")]),t._v(" "),_("td",[t._v("运行状态，Java线程将操作系统中的就绪和运行两种状态统称为”运行中“")])]),t._v(" "),_("tr",[_("td",[t._v("BLOCKED")]),t._v(" "),_("td",[t._v("阻塞状态，表示线程阻塞与所")])]),t._v(" "),_("tr",[_("td",[t._v("WAITING")]),t._v(" "),_("td",[t._v("等待状态，表示线程进入等待状态，进入该状态表示当前线程需要等待其他线程做出一些特定动作（通知或中断）")])]),t._v(" "),_("tr",[_("td",[t._v("TIME_WAITING")]),t._v(" "),_("td",[t._v("超时等待状态，该状态不同与WAITING,他是可以在指定时间自行返回的")])]),t._v(" "),_("tr",[_("td",[t._v("TERMINATED")]),t._v(" "),_("td",[t._v("终止状态，表示当前线程已经执行完毕")])])])]),t._v(" "),_("p",[t._v("线程在生命周期中并不是固定处于某一个状态，而是随着代码的执行在不同状态之间切换。状态变迁如下图所示")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190920002523155.png",alt:"image-20190920002523155"}})]),t._v(" "),_("p",[t._v("由上图可以看出：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("NEW（新建）")]),t._v(" "),_("p",[t._v("线程创建之后它将处于 "),_("strong",[t._v("NEW（新建）")]),t._v(" 状态")])]),t._v(" "),_("li",[_("p",[t._v("RUNNABLE(运行状态)")]),t._v(" "),_("p",[t._v("调用 "),_("code",[t._v("start()")]),t._v(" 方法后开始运行，线程这时候处于 "),_("strong",[t._v("READY（可运行）")]),t._v(" 状态。可运行状态的线程获得了 CPU 时间片（timeslice）后就处于 "),_("strong",[t._v("RUNNING（运行）")]),t._v(" 状态。")]),t._v(" "),_("blockquote",[_("p",[t._v("操作系统隐藏 Java 虚拟机（JVM）中的 RUNNABLE 和 RUNNING 状态，它只能看到 RUNNABLE 状态（图源："),_("a",{attrs:{href:"https://howtodoinjava.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HowToDoInJava"),_("OutboundLink")],1),t._v("："),_("a",{attrs:{href:"https://howtodoinjava.com/java/multi-threading/java-thread-life-cycle-and-thread-states/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java Thread Life Cycle and Thread States"),_("OutboundLink")],1),t._v("），所以 Java 系统一般将这两个状态统称为 "),_("strong",[t._v("RUNNABLE（运行中）")]),t._v(" 状态 。")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190920002612452.png",alt:"image-20190920002612452"}})]),t._v(" "),_("ul",[_("li",[_("p",[t._v("WAITING (等待)")]),t._v(" "),_("p",[t._v("当线程执行 "),_("code",[t._v("wait()")]),t._v("方法之后，线程进入**WAITING (等待)**状态，进入等待状态的线程需要依靠其他线程的通知才能够返回到运行状态")])]),t._v(" "),_("li",[_("p",[t._v("TIME_WAITING(超时等待)")]),t._v(" "),_("p",[t._v("TIME_WAITING(超时等待)状态相当于在等待状态的基础上加上超时限制，比如"),_("code",[t._v("sleep(long millis)")]),t._v("方法或"),_("code",[t._v("wait(long millis)")]),t._v("方法可以将java线程置于 TIMED WAITING 状态，当超时时间到达后 JAVA线程将会返回RUNNABLE 状态")])]),t._v(" "),_("li",[_("p",[t._v("BLOCKED（阻塞）")]),t._v(" "),_("p",[t._v("当线程调用同步方法时，在没有获取到锁的情况下，线程将进入"),_("strong",[t._v("BLOCKED（阻塞）")]),t._v(" 状态")])]),t._v(" "),_("li",[_("p",[t._v("TERMINATED（终止）")]),t._v(" "),_("p",[t._v("线程在执行Runnale的run() 方法之后将会进入到**TERMINATED（终止）**状态")])])]),t._v(" "),_("h2",{attrs:{id:"_2-sleep-方法和wait-方法区别和共同点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-sleep-方法和wait-方法区别和共同点"}},[t._v("#")]),t._v(" 2. sleep() 方法和wait()方法区别和共同点")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("两者最主要的区别在于："),_("strong",[t._v("sleep方法没有释放锁，而wait 方法释放了锁")])])]),t._v(" "),_("li",[_("p",[t._v("两者都可以暂停线程的执行")])]),t._v(" "),_("li",[_("p",[t._v("wait通常被用于线程间的交互/通信，sleep通常被用于暂停执行")])]),t._v(" "),_("li",[_("p",[t._v("wait() 方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的notify()或者notifyAll方法")]),t._v(" "),_("p",[t._v("sleep（）方法执行完成后，线程会自动苏醒，或者可以使用wait(long timeout)超时后线程会自动苏醒")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);