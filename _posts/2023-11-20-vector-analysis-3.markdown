---
layout: post
title:  "ベクトル解析 戸田 第3章 演習問題解答"
date:   2023-11-20 04:08:40 +0900
categories: vector analysis Toda
---

## 第3章 演習問題解答
#### [1]
曲線 $$\textbf{r}=\textbf{r}(t)$$ の曲率半径
$$\rho$$
が、
$$
    \frac{1}{\rho^2}
    = \frac{(v\times a)^2}{v^6}
    = \frac{v^2a^2 - (\mathbf{v}\cdot \mathbf{a})^2}{v^6}
$$
で与えられることを示す。

$$
\textbf{v} = \dot{\textbf{r}},
\textbf{a} = \ddot{\textbf{r}}
$$

である。

#### ( i ) $$ \frac{1}{\rho^2} = \frac{(v\times a)^2}{v^6} $$

$$
\textbf{v}\times\textbf{a}
=v\textbf{t}\times
\left(
    \dot{v}\textbf{t}
    +\frac{v^2}{\rho}\textbf{n}
\right)
$$

$$
\textbf{t}\times\textbf{t}=0
$$,
$$
\textbf{t}\times\textbf{n}=\textbf{b}
$$
であるから、
$$
\textbf{v}\times\textbf{a}
=\frac{v^3}{\rho}\textbf{b}
$$。

したがって、

$$
\begin{aligned}
(\textbf{v}\times\textbf{a})^2
    &=\frac{v^6}{\rho^2}\textbf{b}^2\\
    &=\frac{v^6}{\rho^2}。
\end{aligned}
$$

$$
\textbf{b}
$$
は単位ベクトルなのでその大きさが1であることを思い出しておきましょう。

そのまま式変形をすると、

$$ \frac{1}{\rho^2} = \frac{(v\times a)^2}{v^6} $$

が得られる■

v ,aがvt, 
$$vt+(v^2/\rho) n$$
で表されることについては、(3.24)(3.38)を再確認するとよいでしょう。

<br>

#### ( ii ) $$\frac{1}{\rho^2} = \frac{v^2a^2 - (\mathbf{v}\cdot \mathbf{a})^2}{v^6}$$

    
<br>

#### [2]
楕円
$$
\textbf{r} = a \cos t\mathbf{i} + b \sin t \mathbf{j}
$$
の曲率を求める。