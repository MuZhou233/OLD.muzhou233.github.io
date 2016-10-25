---
layout: post
title: NOIP2016考前知识总结
date: 2016-10-25
categories: oi
tags: [oi]
description: NOIP2016考前知识总结
---

**要复赛了! 要退役了! 快总结一下好了...**  
(排名不分先后, 慢慢添加内容)  

***

#数据结构

- 栈 队列 链表 二叉搜索树 堆 表达式树 线段树 树状数组 Trie树 HASH表

***

三种图的存储方式  

##邻接矩阵

NONE  

##邻接表

```c++  
struct E{
	int to, v;
};
vector <E> G[N];
```  

##邻接链表/前向星

```c++  
struct E{
	int to, v, nex;
};
vector <E> G;
int head[N];
```  

***

##并查集 

```c++  
int fa[N];
int father (int x) {return x == fa[x] ? x : fa[x]=father(fa[x]);}
void Union(int x, int y){fa[father(x)] = father(y);}
```  
并查集可以用来判断图的连通性, 还可以用来做一些奇怪的事情, 比如`[NOIP2010]关押罪犯`可以用并查集`造点`  

#图论

- 拓扑序 欧拉回路 差分约束 强连通分量

##最短路

有三种算法, 常用SPFA  

```c++  
queue <int> que;
bool inque[N];
int v[N];
void spfa(int s){
	for(int i=0;i<N;i++)v[i]=INF;
	memset(inque, 0, sizeof(inque));
	while(!que.empty())que.pop();
	que.push(s);
	inque[s]=1;
	v[s]=0;
	while(!que.empty()){
		int now=que.front(); que.pop();
		inque[now]=0;
		for(int i=head[now];i!=-1;i=G[i].nex)if(v[now]+G[i].v<v[G[i].to]){
			v[G[i].to]=v[now]+G[i].v;
			if(inque[G[i].to])continue;
			que.push(G[i].to);
			inque[G[i].to]=1;
		}
	}
}
```  

##网络流

写了两篇博客: [浅谈预流推进网络流算法][1] [再谈预流推进-更快算法][2]  

#贪心

#暴力

- 模拟 枚举 搜索 剪枝 开关问题 分块 离散化

#分治

- 归并排序 树上分治(重心分解)

##快速排序

```c++  
sort(a,a+n);
```  

##二分查找/答案

外层内容相差无几, 注意区间问题, 挂了无数次, 请教 [Coolkid][3] 去  

```c++  
int l=L, r=R, mid;
while(l<r){
	mid=(l+r)/2;
	if(judge(mid)){
		/*---*/
	}else{
		/*---*/
	}
}
/*取 l 的值*/
```  

#字符串

- KMP AC自动机 HASH Manacher

#数论

- 高精度 扩欧 素数测试 素数筛法 快速幂 欧拉函数 斐波那契数列 唯一分解定理 二项式定理 加法原理 乘法原理 基本计数问题 期望与概率 矩阵乘法 矩阵快速幂

#倍增

- LCA倍增 ST表

#DP

- 阶段类 区间类 单调队列/栈 预处理 前缀和优化


[1](http://muzhou.tk/blog/2016/10/17/wangluoliu/)
[2](http://muzhou.tk/oi/2016/10/24/wangluoliu2/)
[3](http://cogs.pro/cogs/user/detail.php?uid=5328)
